---
title: Undefined Pennant Features
date: "2026-03-14"
intro: What happens if you don't define the features in Laravel Pennant? Does it still work? Is it better or worse?
---

# Undefined Pennant Features

[Pennant](https://laravel.com/docs/12.x/pennant) is a first-party
Laravel package that helps you with feature flags. Turns out that by not
registering ("defining") your features you can solve a common annoyance.

## Documented workflow

According to docs we start by defining a feature. Let's give the new forum to
20% of our users:

```php
Feature::define('forum-v2', Lottery::odds(20 / 100));
```

And then you can add checks in your code, e.g.

```php
if (Feature::active('forum-v2')) {
	// ... 
}
```

The first such check for a particular user will roll the lottery and the user
will get it activated with 20% chance. The resolved result will be stored and
subsequent checks will always return the same `true` or `false` for that user.

## Controlled release

A common use case for feature flags is when you want to release a feature for
some selected group of users instead of a random portion. Personally I've never
needed the random one. In that case you'd define the feature like this:

```php
// deny by default
Feature::define('forum-v2', false);
```

So any user without a stored value will get the feature denied. And for your
selected users you do explicit

```php
$user->features()->activate('new-layout');
```

Probably invoking that via some feature management panel or smtn like that.

What happens is that:

- If you `activate`, a `true` entry for that user gets stored in the database.
- When you check for the feature, Pennant looks in the database and
  - If there's a value (`true` or `false`), it gets returned;
  - Otherwise it's resolved (to `false` as defined above) and the value is stored in the database.

As a result the table of features will not only contain those three or eight
`true` entries, but also thousands or more `false` entries.

That's just noise and mess. In your database and in your feature management
panel. We just wanted to have eight entries for the selected users, no point to
store negatives. Is Pennant even the right tool for feature flags like that?

## Undefined features

Here's the trick. Never define the feature. Just do this:

```php
$user->features()->activate('forum-v2');
```

and check it as usual, e.g.

```php
if ($user->features()->active('forum-v2')) {
	// ...
}
```

That's it. How it works is:

- If you `activate`, a `true` entry for that user gets stored in the database.
- When you check for the feature, Pennant looks in the database and
  - If there's a value (`true` or `false`), it gets returned;
  - Otherwise there's nothing to resolve, a `false` is returned without storing anything.

And that's exactly what we need. Only the enabled ones are listed in the
database and otherwise you just don't have an entry and don't have the feature.

## Are we supposed to rely on an undocumented feature??

Yeah, I was thinking about the same. In fact I made up the question before you
asked. You probably didn't even ask it, right?

Although this behaviour is not described in the docs, there is
[a test](https://github.com/laravel/pennant/blob/2d4a58c9923d3d2fffcaba7c066d9c82ca53b25f/tests/Feature/DatabaseDriverTest.php#L638-L646)
that ensures it works like that. So it is an intentional behaviour and the test
makes it safe to rely on this behaviour.

Btw [here](https://github.com/laravel/pennant/blob/2d4a58c9923d3d2fffcaba7c066d9c82ca53b25f/src/Drivers/DatabaseDriver.php#L166-L168) is the code responsible for this.

## But shouldn't I define my features???

In fact you can. The trick is just that you shouldn't define the resolver
function. It's very doable by defining your features [as classes](https://laravel.com/docs/12.x/pennant#class-based-features).

```php
class ForumV2
{
	public function before(User $user)
	{
		if (app()->environment('local'))
			return true;

		if ($user->doesntDeserveNewThings())
			return false;

		if ($user->isBetaTester())
			return true;

		if (now()->isAfter(config('forum.v2_released_at')))
			return true;
	}
    
	// Just don't add a `resolve()` method here.
}
```

And now you have all the control and scheduled release capabilities of `before`
as well as being able to `activate` it for selected users, but for others it
will just be inactive without trying to store anything.
