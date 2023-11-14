var x = 1;
let y = 0;
	//Start
	$(document).ready(function(){
		$("#StartGameButton").click(function(){
			$("#StartGame").slideToggle("slow");
			$("#DeadBody").slideToggle("slow");
			$("#MainMenu").slideToggle("slow");
		});
		//Button Functions
		$("#Continue").click(function(){
			switch(x){
			case 1:
			//First Scene
				x = 2;
				$("#StoryText").hide(1000);
				$("h3#StoryText").text("Looks like the typical murder scene. Person who died seems to have had been killed by someone they knew. The victim apparently died during a Friday, on the 13th of October... Did a background check. Barely knew anyone in the area.");
				$("#StoryText").show(1000);
				$("h2#Acts").hide(1000);
				$("h2#Acts").text("Act 1- Rainfall");
				$("p").hide(1000);
				$("#scene1").slideToggle("slow");
				$("#scene2").slideToggle("slow");
				$("p").show(1000);
				$("p#Description").text("Stormy. Dead Body Outline. Dreadful...");
				$("p#Thoughts").text("That narrows it down to 3 people...");
				$("h2#Acts").slideToggle(1000);
				break;
			case 2:
			//Second Scene
				x = 3;
				$("#StoryText").hide(1000);
				$("h3#StoryText").text("There were 3 suspects linked to the crime. Had to interrogate the three of them.");
				$("#StoryText").show(1000);
				$("h2#Acts").hide(1000);
				$("h2#Acts").text("Act 2 - Suspects");
				$("#scene2").slideToggle("slow");
				$("p#Description").hide("slow");
				$("p#Thoughts").hide(1000);
				$("p#Thoughts").text("Three, huh? Guess you can't judge a book by it's cover anymore...");
				$("p#Thoughts").slideToggle(1000);
				$("h2#Acts").slideToggle(1000);
				$("#Image").animate({width: "1700px", height: "800px"}, 1000);
				break;
			case 3:
			//Third Scene - First Suspect
				x = 4;
				$("#suspect1").animate({height:"toggle"},"slow");
				$("#StoryText").hide(1000);
				$("h3#StoryText").text("First suspect on the list. Lady Medina. Knew the victim because of how high-profile the victim was.");
				$("p#Description").text("Fancy Woman. Talks all posh, but is Delightful.");
				$("p#Description").slideToggle(1000);
				$("p#Thoughts").hide(1000);
				$("p#Thoughts").text("Strange Lady... Didn't really seem suspicious, other than having no info about her background prior to the investigation...");
				$("p#Thoughts").slideToggle(1000);
				$("#StoryText").show(1000);
				break;
			case 4:
			//Third Scene - Second Suspect
				x = 5;
				$("#suspect2").animate({height: "toggle"}, "slow");
				$("#StoryText").hide(1000);
				$("p#Description").slideToggle(1000);
				$("h3#StoryText").text("Second Suspect. Miss Patterson. A widow who first met the victim when he first moved into the neighborhood.");
				$("p#Description").text("Meek woman. Still Grieving the loss of her husband...");
				$("p#Description").slideToggle(1000);
				$("p#Thoughts").hide(1000);
				$("p#Thoughts").text("I spoke to her and she also didn't seem any bit suspicious... but I can't rule her out just yet.");
				$("p#Thoughts").slideToggle(1000);
				$("#StoryText").show(1000);
				break;
			case 5:
			//Third Scene - Third Suspect
				x = 6;
				$("#suspect3").animate({height: "toggle"}, "slow");
				$("#StoryText").hide(1000);
				$("p#Description").slideToggle(1000);
				$("h3#StoryText").text("Last Suspect. A Mr. Cal Fritz. Says he's a co-worker and drinking buddy of the victim.");
				$("p#Description").text("Serious Guy. Seems like he's seen better days.");
				$("p#Description").slideToggle(1000);
				$("p#Thoughts").hide(1000);
				$("p#Thoughts").text("Talked to him and it seemed like he was the silent type, though he kept egging on and on about beer. Seems like a drinks enthusiast.");
				$("p#Thoughts").slideToggle(1000);
				$("#StoryText").show(1000);
				break;
			case 6:
			//Third Scene - Last
				x = 7;
				$("h2#Acts").hide(1000);
				$("h2#Acts").text("Act 3 - The Alibis");
				$("h2#Acts").slideToggle(1000);
				$("#StoryText").hide(1000);
				$("p#Description").slideToggle(1000);
				$("h3#StoryText").text("Out of these three, only one is the culprit...");
				$("p#Description").text("Three unrelated suspects. One Victim. Who is it?.");
				$("p#Description").slideToggle(1000);
				$("p#Thoughts").hide(1000);
				$("p#Thoughts").text("I better double check their alibis before we make the arrest...");
				$("p#Thoughts").slideToggle(1000);
				$("#StoryText").show(1000);
				$("#Continue").slideToggle(1000);

				//Picking First Suspect
				$("#suspect1").click(function(){
					y += 1;
					$("#StoryText").hide(1000);
					$("h3#StoryText").text("Lady Medina's Alibi was that she was out with her friends to celebrate her birthday... Said her birthday was coincidentally on the day of the murder, which was the 13th of October.");
					$("#StoryText").show(1000);
					$("p#Thoughts").hide(1000);
					$("p#Thoughts").text("A Murder on her birthday? Poor lady... but I ain't buying it...");
					$("p#Thoughts").slideToggle(1000);
					if (y == 3)
						{
							$("#Continue").slideToggle(1000);
						}
				});

				//Picking Second Suspect
				$("#suspect2").click(function(){
					y += 1;
					$("#StoryText").hide(1000);
					$("h3#StoryText").text("Miss Patterson's Alibi is that she was visiting her husband's grave at the time. Apparently, his death date was eerily the same as the current victim's, which was the 13th of October. What was also surprising to hear is that apparently, her husband was also murdered, but the murderer was never caught.");
					$("#StoryText").show(1000);
					$("p#Thoughts").hide(1000);
					$("p#Thoughts").text("I feel bad for the misssus, having to experience two murders... but it's quite suspicious for her to be involved in two murders on the same date.");
					$("p#Thoughts").slideToggle(1000);
					if (y == 3)
						{
							$("#Continue").slideToggle(1000);
						}
				});

				//Picking Third Suspect
				$("#suspect3").click(function(){
					y += 1;
					$("#StoryText").hide(1000);
					$("h3#StoryText").text("Mr. Cal's Alibi was very strange. He said he was out on a bar-hopping spree with some other co-workers when he heard that Mr. McWhisky was dead. From his testimony, he recently was paid his weekly wage, and decided to treat the others to some drinks. He said he always does this every October 13th, which he says was when he got his weekly pay.");
					$("#StoryText").show(1000);
					$("p#Thoughts").hide(1000);
					$("p#Thoughts").text("Man really loves his beer... but wait, hold on. October 13th? Weekly pay? Something isn't adding up...");
					$("p#Thoughts").slideToggle(1000);
					if (y == 3)
						{
							$("#Continue").slideToggle(1000);
						}
				});
				break;
			case 7:
			//Last Scene
				x = 8;
				$("#StoryText").hide(1000);
				$("p#Description").slideToggle(1000);
				$("h3#StoryText").text("Alright. With all the information gathered. It's pretty obvious who the culprit of this crime is...");
				$("p#Description").text("Three unrelated suspects. One Victim. Whodunnit?.");
				$("p#Description").slideToggle(1000);
				$("p#Thoughts").hide(1000);
				$("p#Thoughts").text("After some deliberation... the true culprit of this case is...");
				$("p#Thoughts").slideToggle(1000);
				$("#StoryText").show(1000);
				$("#Continue").slideToggle(1000);
				$("#Choice1").slideToggle(1000);
				$("#Choice2").slideToggle(1000);
				$("#Choice3").slideToggle(1000);
				break;
				}
			});
			//Bad Ending
			$("#Choice1").click(function(){
				$(".suspects").slideToggle(100);
				$("#Image").animate({width: "750px", height: "500px"}, 1000);
				$("#BadEnding").slideToggle(1000);
				$("#Choice1").slideToggle(1000);
				$("#Choice2").slideToggle(1000);
				$("#Choice3").slideToggle(1000);
				$("h2#Acts").hide(1000);
				$("h2#Acts").text("Bad Ending - Lady Medina");
				$("h2#Acts").slideToggle(1000);
				$("#StoryText").hide(1000);
				$("p#Description").slideToggle(1000);
				$("h3#StoryText").text("Alright. We made the arrest... But something just doesn't sit right with me. Because of this unease, I did some private investating on my own, and I managed to reach out to one of Lady Medina's Friends. Apparently, her alibi was the truth. We released her after I rectified this mistake. While I was investigating, Mr. Fritz vanished from our radar. First, a false arrest, and now a culprit is missing? Bah... I'll just go get a drink... This week's been stressful...");
				$("p#Description").text("Somber. Dreadful. Unsafe.");
				$("p#Description").slideToggle(1000);
				$("p#Thoughts").hide(1000);
				$("p#Thoughts").text("BAD END. THANKS FOR PLAYING.");
				$("p#Thoughts").slideToggle(1000);
				$("#StoryText").show(1000);
			});
			//Bad Ending
			$("#Choice2").click(function(){
				$(".suspects").slideToggle(100);
				$("#Image").animate({width: "750px", height: "500px"}, 1000);
				$("#BadEnding").slideToggle(1000);
				$("#Choice1").slideToggle(1000);
				$("#Choice2").slideToggle(1000);
				$("#Choice3").slideToggle(1000);
				$("h2#Acts").hide(1000);
				$("h2#Acts").text("Bad Ending - Miss Patterson");
				$("h2#Acts").slideToggle(1000);
				$("#StoryText").hide(1000);
				$("p#Description").slideToggle(1000);
				$("h3#StoryText").text("Alright. We made the arrest... But something just doesn't sit right with me. Because of this unease, I did some private investating on my own, and found a gravekeeper who heard of the news of Miss Patterson's Arrest. Apparently, her alibi was the truth. We released her after I rectified this mistake. While I was investigating, Mr. Fritz vanished from our radar. First, a false arrest, and now a culprit is missing? Bah... I'll just go get a drink... This week's been stressful...");
				$("p#Description").text("Somber. Dreadful. Unsafe.");
				$("p#Description").slideToggle(1000);
				$("p#Thoughts").hide(1000);
				$("p#Thoughts").text("BAD END. THANKS FOR PLAYING.");
				$("p#Thoughts").slideToggle(1000);
				$("#StoryText").show(1000);
			});
			//Good Ending
			$("#Choice3").click(function(){
				$(".suspects").slideToggle(100);
				$("#Image").animate({width: "750px", height: "500px"}, 1000);
				$("#GoodEnding").slideToggle(1000);
				$("#Choice1").slideToggle(1000);
				$("#Choice2").slideToggle(1000);
				$("#Choice3").slideToggle(1000);
				$("h2#Acts").hide(1000);
				$("h2#Acts").text("Good Ending");
				$("h2#Acts").slideToggle(1000);
				$("#StoryText").hide(1000);
				$("p#Description").slideToggle(1000);
				$("h3#StoryText").text("We caught the perp. It was Cal Fritz, the alledged co-worker of the victim. Reality was that he wasn't actually working for the same company Mr. McWhisky was working at. That, and everyone knows you get paid on a Sunday, and not a Friday. What's more interesting is that this guy was actually the infamous serial killer dubbed 'The Drunken Murderer. Thank god we caught him before he could give us the slip. Now, to enjoy my bourbon in peace.");
				$("p#Description").text("Peaceful. Calm. Relaxing.");
				$("p#Description").slideToggle(1000);
				$("p#Thoughts").hide(1000);
				$("p#Thoughts").text("GOOD END. THANKS FOR PLAYING.");
				$("p#Thoughts").slideToggle(1000);
				$("#StoryText").show(1000);
			});
		});

//genuinely clueless

