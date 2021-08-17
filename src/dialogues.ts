enum Emoji {
  Wrong = "❌",
  Correct = "✅",
  Correction = "❌✅",
}

type Dialogues = `${string}${Emoji}`;

export const dialogues: Dialogues[] = [
  // Incorrect information
  `Now we need... I'm going with (ingredient). Hold up! ${Emoji.Wrong}`,
  `Uh... mhm...We'll go with (ingredient). Nope, that's not it! ${Emoji.Wrong}`,
  `Alright, next ingredient...(ingredient)? Sorry, that wasn't right. ${Emoji.Wrong}`,
  `Alright, let's see...We'll go with (ingredient). Strike that. ${Emoji.Wrong}`,
  `Hold on... I'm going with (ingredient). Wait a minute! ${Emoji.Wrong}`,
  // Corrected information
  `It's supposed to be (ingredient)! Pour it in. ${Emoji.Correction}`,
  `It's supposed to be (ingredient)! That should get the process going. ${Emoji.Correction}`,
  `I messed up. It should'a been (ingredient). That should get it on. ${Emoji.Correction}`,
  `I messed up. It should'a been (ingredient). Pour it in. ${Emoji.Correction}`,
  `We need (ingredient)! ${Emoji.Correction}`,
  `That should'a been (ingredient)! ...unless I've missed something... ${Emoji.Correction}`,
  `...(ingredient)?...I'm XX% sure. ${Emoji.Correction}`,
  `By method of elimination it has to be (ingredient). ...what's the worst that could happen, right? ${Emoji.Correction}`,
  `My bad. It's (ingredient). Add some. ${Emoji.Correction}`,
  // Correct information
  `Uh, I hope I got this right... (ingredient)? ...I'm XX% sure. ${Emoji.Correct}`,
  `Uh. I hope I got this right... (ingredient)? You got any of that lying around? ${Emoji.Correct}`,
  `Uh. I hope I got this right... We'll go with (ingredient). ...I...think. ${Emoji.Correct}`,
  `Okay, what's next... (ingredient)? ...I'm XX% sure. ${Emoji.Correct}`,
  `Okay, what's next... Oh I'm going with (ingredient). ...it's a toss-up, really. ${Emoji.Correct}`,
  `Okay, what comes after that... We'll go with (ingredient). That should get the process going. ${Emoji.Correct}`,
  `Okay, what comes after that... (ingredient). That should get the process going. ${Emoji.Correct}`,
  `Okay, what comes after that... It's (ingredient). That should get it on. ${Emoji.Correct}`,
  `Uh... mhm... It's (ingredient). ...that's my very best guess. ${Emoji.Correct}`,
  `Uh... mhm... (ingredient). ...this website better be accurate. ${Emoji.Correct}`,
  `Uh... mhm... (ingredient). That should get it on. ${Emoji.Correct}`,
  `Uh... mhm... (ingredient)? ...IF my calculations are correct. ${Emoji.Correct}`,
  `Uh... mhm... (ingredient)? ...and kiss your lucky charms. ${Emoji.Correct}`,
  `Uh... mhm... I'm going with (ingredient). Go for it. ${Emoji.Correct}`,
  `Alright, next ingredient... We'll go with (ingredient). That should get the process going. ${Emoji.Correct}`,
  `Alright, next ingredient... We'll go with (ingredient). ...I'm XX% sure. ${Emoji.Correct}`,
  `Alright, let's see... (ingredient). ...I think so, at least. ${Emoji.Correct}`,
  `Alright, let's see... (ingredient). ...I think so, at least. ${Emoji.Correct}`,
  `Alright, let's see... (ingredient)? ...yeah... yeah. ${Emoji.Correct}`,
  `Alright, let's see... (ingredient)? ...I'm XX% sure. ${Emoji.Correct}`,
  `Alright, let's see... It's (ingredient). ...unless I've missed something... ${Emoji.Correct}`,
  `Uh, I hope I got this right... (ingredient)? You got any of that lying around? ${Emoji.Correct}`,
  `Uh, I hope I got this right... We'll go with (ingredient). ...for sure. Or, most likely. ${Emoji.Correct}`,
  `Now we need... It's (ingredient). ...that's my best guess. ${Emoji.Correct}`,
  `Now we need... We'll go with (ingredient). ...I'm XX% sure. ${Emoji.Correct}`,
  `Now we need... We'll go with (ingredient). ...what's the worst that could happen, right? ${Emoji.Correct}`,
  `Now we need... I'm going with (ingredient). ...these internet descriptions are iffy at best. ${Emoji.Correct}`,
  `Hold on... (ingredient). I'm XX% sure. ${Emoji.Correct}`,
  `Uh, if I read this correctly... uh... Oh I'm going with (ingredient). ...I'm XX% sure. ${Emoji.Correct}`,
];
