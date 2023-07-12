Hi folks! welcome to Building Your Own Modern Ember Addon! Some of you know me already but I'll give you a quick intro anyway. I'm Chris, I have a family back home in Ireland which feels very very far away right now! I've been on the Ember Core learning team for like 4 years now and I've recently joined the Ember Core Embroider team, which is really the "build systems" team. I've been doing Ember since 2011 and I've been building addons for nearly the same amount of time. Anyone in the room remember Ember App Kit? Well I remember porting ember-cli-notifications from a pre-addon library thingy to a fancy new ember-cli based addon when the whole thing was very new and shiney. 

Why are we here? well we're in the middle of another transition. Ember Addons are an incredibly important part of the ecosystem and in my opinion are one of the things that makes Ember great 🎉 The things you could do with an addon evolved both technically and culturally very organically over the years but nobody really took a step back and though about the overall architecture or philosopy for a long time, not until embroider came along!

I'm not entirely sure what to expect out of this workshop since since there is so so so much to cover, but what I'm hoping for is that y'all leave here with a good idea of how to think about modern addons, why they have changed so much between the classic v1 and v2 versions and at least have a foot hold on an idea of what is possible with modern addons. I'll also make sure that y'all know of all the good places to go to find out the information that you need if you get stuck building your own amazing addons in the next few months.

any questions before I proceed? 

Ok so what I'm hoping to cover today splits into two sections and I'm hopfully going to split those evenly in half one hour each. First I'm going to go over some of the capabilities of the new v2 addon blueprint. If you generate one right now you'll see there is a lot going on and I want to give you the tour. 

The second thing I want to dive into is the more involved kind of addon. In ember-cli and v1 addons we could automatically influence the build in weird and wonderful ways, but you can't do that any more. You can still influnce the build, but it's not quite automatic. But we'll dive in a bit more when we get there.

So the first thing we're going to do is we're going to generate a new addon using this command

```
EMBER_CLI_PNPM=true npx ember-cli@latest addon modern-ember-addon-example -b @embroider/addon-blueprint --pnpm --embroider
``` 

While we get that running on everyone's machine I can walk through what each of these little bits actually does
