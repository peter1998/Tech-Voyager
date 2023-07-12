<script>
	import Sidebar from '../sidebar/Sidebar.svelte';

	let sections = [
		{
			title: 'Exercising your internal GPS',
			content: `You could think of the hippocampus — an essential region for learning, memory, and navigation — as your internal GPS. While exercise alone is good for the hippocampus, working out in a cognitively demanding environment may be even better, according to a 2012 studyTrusted Source.
  
  "When you do exercise on an elliptical or treadmill, you’re not being challenged cognitively. You’re just using automatic movements you’d use every day," explains McEwen.
  
  But when you’re out in the forest or other wild terrain, she adds, "you have to use spatial navigation, your memory, and your attention" with nearly every step.`
		},
		{
			title: 'New skills enhance brain plasticity',
			content: `Hiking is also an opportunity to hone new skills, which involves neuroplasticity, or the nervous system’s ability to accommodate new demands and information.
  
  Neuroplasticity is a "vital superpower of our nervous system that distinguishes us from other animals," says Gomes-Osman. "Its effect is powerful when this new undertaking is outside of your comfort zone. A 2013 study found that older adults who learned a new, complex skill showed marked improvements in memory.
  
  On a hike, you can further exercise your brain by learning to use a compass. Or, after you feel prepared fitness-wise, you could plan an overnight backpacking trip, which requires you to hone a whole slew of skills, like pitching a tent, filtering water, cooking on a camp stove, and mastering a bear bag hang, just to name a few.`
		},
		{
			title: 'Nature’s power to destress',
			content: `While the very act of working out supports the brain, nature’s sights, sounds, and even smells also have a positive influence.
  
  A 2020 studyTrusted Source suggests that spending time in nature changes signals in the brain and promotes a more relaxed state.
  
  "In the study, they could see brain waves decrease in the prefrontal cortex when compared to urban settings," explains Gomes-Osman. "When people were in nature, they tended towards neural signals associated with making fewer decisions and relaxing quite a bit."
  
  Any relief from stress, which affects both memory and mood, will likely have positive effects on the brain.`
		},
		{
			title: 'Pro tips for new hikers',
			content: `Hiking is more than just a stroll through the woods. Learn from my mistakes. With a little planning, it’s an activity that can bolster your mind, body, and spirit.
  
  Be prepared
  It’s the Scout’s motto for a reason.
  
  For one, you have to dress the part. Wear layers suitable for the weather and made from breathable, moisture-wicking fabrics, like silk, wool, or synthetics (no cotton, please!), to stay warm and dry.
  
  It’s also best practice to pack the so-called “10 essentials,” established by Seattle-based climbing organization The Mountaineers, for every hike.
  
  This list of gear includes:
  - a map (Google Maps doesn’t count)
  - a headlamp
  - sun protection
  - first-aid supplies
  - a knife
  - fire-starting materials
  - an emergency shelter, such as a tent or space blanket
  - extra food
  - extra water
  - a change of clothes
  
  Together, these supplies may help keep you safe if you become stranded overnight in the wilderness.
  
  Bring them along even if you think it seems like overkill. Believe me: You only need to be caught in a torrential thunderstorm while above tree line and in chilly conditions to realize that it’s better to be safe than sorry.
  
  And, of course, don’t forget to bring a mask. If there’s no one around, you can take it off, but make sure to keep it handy in case you come across another hiker.
  
  Fuel up
  Alicia Filley, a hiking coach and physical therapist, recommends taking along extra snacks to help push you up and over the most challenging parts of the trail.
  
  "I recommend micro-breaks and micro-snacks," she says. "Micro-breaks are short stops of only 1 to 2 minutes to let your heart rate and respiratory rate return to baseline. Steep hikes burn many calories, so keep an easily digestible snack handy and eat a few bites after several micro-breaks."
  
  Grab a pair of trekking poles
  There once was a time when I was too proud for trekking poles. But on a group trek in Peru, the guide encouraged me to have an open mind and give them a try. I quickly discovered they improved my stability and increased my speed. Today, I never leave for a hike without them.
  
  Filley also swears by this simple piece of equipment for reducing stress on knees: "Hiking poles are invaluable in helping with stability and balance on more technical terrain that includes rocks and roots."
  
  Add strength training
  While training for my multi-week backpacking trip, I scoured many online forums for tips to improve my hiking prowess.
  
  Again and again, I encountered various versions of this phrase: "The best training for hiking is to go for a hike." While there’s something to be said for specificity, day hikes still weren’t getting me where I wanted to be.
  
  It was strength training that finally took my skills to another level.
  
  "Because we all lose muscle mass as we age, strength training is the No. 1 thing older hikers can do to improve their hiking ability," Filley explains. "Resistance training builds strength, which also supports aching joints."
  
  Slowly increase distance and elevation gain
  Apparently, I had made a common mistake on my first hike by underestimating the physical feat that awaited me. "Many hikers get in over their heads and put themselves in dangerous situations," Filley explains.
  
  While there’s no easy formula for increasing the difficulty of your hikes, Filley suggests keeping a journal to rate the perceived difficulty. If that’s too complicated, then you might try adding no more than 1 mile at a time. Adding too much distance or elevation too quickly could increase the chance of injury.
  
  Still, to gain the maximum brain benefits of hiking, don’t be afraid to (safely) challenge yourself to conquer taller and taller mountains. As McEwen says, when it comes to brain health, "The intensity of the activity really matters."`
		}
	];
</script>

<Sidebar />

<div class="container">
	<nav>
		<a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/cv">CV</a>
		<a href="/contact">Contact</a>
	</nav>

	{#each sections as section}
		<div class="section">
			<h2 class="section-title">{section.title}</h2>
			<p class="section-content">{section.content}</p>
		</div>
	{/each}
</div>

<style>
	/* Add your custom styles here */
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px;
	}

	nav {
		display: flex;
		justify-content: space-around;
		background-color: #9be2d5;
		color: #fff;
		padding: 10px;
		margin-bottom: 20px;
	}

	nav a {
		color: #fff;
		text-decoration: none;
	}

	.section {
		margin-bottom: 20px;
		padding: 20px;
		background-color: #f5f5f5;
		border-radius: 10px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.section-title {
		font-size: 20px;
		font-weight: bold;
		margin-bottom: 10px;
	}

	.section-content {
		line-height: 1.5;
	}
</style>
