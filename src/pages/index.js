import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Nav from "../components/Nav"
import Footer from "../components/Footer"
import GalleryItem from "../components/GalleryItem"

import "../styles/global.css"
import "../styles/index.css"
import WashUImage from "../../static/images/washU.png"
import HomeOffice from "../../static/images/office_home.jpg"
import Scrabble from "../../static/images/scrabble.jpg"
import Plant from "../../static/images/plant_vase.jpg"
import HarryPotter from "../../static/images/harry_potter_book.jpg"
import Candles from "../../static/images/candles.jpg"
import Pebble from "../../static/images/pebble.png"
import PunchingBag from "../../static/images/punching_bag.jpg"
import SubwayPass from "../../static/images/transit_card.webp"
import Scrapbook from "../../static/images/scrapbook.jpg"

export default function Home() {
  return (
    <>
      <div className="background-container">
        <Nav />
        <StaticImage
          alt="background image with many photographs of submitted items in a grid"
          src="../../static/desktop_bg.png"
          layout="fullWidth"
          className="background-image"
          quality="100"
        ></StaticImage>
        <section className="landing">
          <div className="landing-container">
            <div className="landing-header">
              <h1 className=" title-L landing-h">Grounded</h1>
            </div>
            <div className="landing-text">
              <p className="landing-p">
                The stories of global events are often found in the objects left
                behind: artifacts in museums, keepsakes passed through families,
                homes that withstood war, famine, or plague. The COVID-19
                pandemic has forced many of us to find new meaning in the spaces
                we inhabit and the objects that surround us.
              </p>
            </div>
            <div className="landing-buttons">
              <button className="pageButton">See gallery</button>
              <button className="pageButton">Learn More</button>
            </div>
          </div>
        </section>
      </div>
      <section className="about">
        <div className="about-container">
          <div className="about-left">
            <img src={WashUImage} className="responsive"></img>
          </div>
          <div className="about-right">
            <div className="about-header">
              <h2 className="title-M">The Pandemic Archive</h2>
            </div>
            <div className="about-paragraph">
              <p>
                “Grounded: The Pandemic Archive” is a living archive of the
                objects that tell stories of home and hardship amid the crises
                of health and justice. <br></br> <br></br> We invite you to
                explore the featured gallery and collective archive to discover
                objects and spaces that help capture the stories of this
                historic time.
              </p>
            </div>
            {/* <div className="about-button">
              <button>Learn More</button>
            </div> */}
          </div>
        </div>
      </section>
      <section className="explore">
        <div className="explore-header">
          <div>
            <h2 className="title-L">Gallery</h2>
            <p className="gallery-text">
              The Gallery offers an artistic representation of several
              submissions to explore the possibilities of a digital exhibit. See
              The Archive to view all stories in their original form.
            </p>
          </div>
          <Link className="pageButton" to="/gallery">
            View the Archive
          </Link>
        </div>
        <div className="explore-body">
          <p className="gallery-text">
            The Gallery offers an artistic representation of several submissions
            to explore the possibilities of a digital exhibit. See The Archive
            to view all stories in their original form.
          </p>
          <div className="image-names">
            <p>Home office</p>
            <p>Scrabble Set</p>
            <p>Potted Plant</p>
            <p>Harry Potter 7</p>
            <p>Candle Set</p>
            <p>River Pebble</p>
            <p>Punching Bag</p>
            <p>Subway Pass</p>
            <p>Journal Collage</p>
          </div>

          <div className="scroll-container">
            <GalleryItem
              name={HomeOffice}
              audio="Audio/office_home.mp3"
              transcription="You know before saying anything, I think it's important to note that, at a time when hundreds of thousands of Americans have died and millions have lost their jobs, I'm extraordinarily lucky to be healthy and employed and you know, folks like me who have been lucky enough to not be personally affected by the Coronavirus, and have jobs and can work from home. One of the biggest difficulties has been the blurring of the line between personal and professional life. Right, um, gone is the daily commute to collect your thoughts on your way to work and personal interactions with your coworkers, the physical distinction of leaving work for the day and being done. And so, with these distinctions gone, everything just sort of bleeds together. You know, work and personal become one and days blend together and slowly blend into weeks. But, you know, as stressful and disorienting as this often is, it's still so removed from the pain and suffering that this pandemic has caused. And, this really hit home last week when on a call from work, we had heard from a local doctor and he was talking about the lived reality of the reason that we are all at home. You know, all this stress about these blurred days just kind of came crashing in as– or crashing away as he described seeing the most death he's seen in his time as a doctor. And it really makes the problem of working at home seem so small and insignificant when you know that that's really what's happening out there and, I don't know, this whole thing's very strange but for as long as this stays our reality people are gonna... You know I’ll keep working at this plastic desk next to my bed and doing what I can to protect those more vulnerable than myself."
            ></GalleryItem>
            <GalleryItem
              name={Scrabble}
              audio="Audio/scrabble.mp3"
              transcription="The picture is of our Scrabble set. And, you know, I could only open up the little books that we've been using to certain pages. And it's funny because they happen to show me winning two out of the three games pictured. But the fact is my son who had to come home from college, during the lockdown, you know, came home early came home in March, he's 19. He and I have played probably 100 games of Scrabble. Since mid March, maybe more, probably 85% of the time he wins. That picture shows me winning a few times there. But it's just been this wonderful bonding experience. You know, we always love to play Scrabble, but the amount of games we've played, and how it's become a routine, and you know, a time to really just forget, for a few minutes about everything that's going on and just focus completely on the moment and the game. We put our phones aside, we just really enjoy the game and I seem to have reached more of a plateau with my ability to score, he keeps getting better and better. And he plays online. And, you know, he's talking about when he does go back to college, even though he's deferring his sophomore year for now, because of Coronavirus concerns and restrictions at the school, not wanting to take classes online etc. But you know, he is talking about starting a Scrabble club back at school because it has been, it's just, we both feel it is a perfect game. But it is a symbol of the amount of family time and time at home and time to have basic simple pleasures mean more in life for a lot of people, certainly for us. You know he's been, you know, just taking the time to explore some things that he loves that, you know, when he's socializing, or at school taking classes or you know, just when everything is open and normal - he doesn't have as much time to do, and I have found the same for myself, you know, I've gotten back to reading again, which for some reason I had not doing enough of you know. And just appreciating simple conversation again, and just lovely aspects of, of being, you know, tied to other human beings that are right there in our lives instead of the humans that are out there on the internet or, you know, people we don't know, but for some reason we listen to and get, you know, worked up about. And it's really, it's really, this time is really about family, and about the people you love and the people who support you in tough times and the people who turn to you in tough times. And for some reason, this picture of the Scrabble set captures that for me. And I don't know what I would do what I would have done during this time, if not for my two sons, who, again, we have leaned on each other. We support each other through what's you know, unprecedented time in history. And I just, you know, reminded again and again, how much I love them and I'm so grateful for them."
            ></GalleryItem>
            <GalleryItem
              name={Plant}
              audio="Audio/plant_vase.mp3"
              transcription="So I bought this plant last September.[and] at the time, it was blooming these really bright yellow flowers.  It was really beautiful but when I went abroad in the spring, I had to leave it with one of my roommates so that he could take care of it until I got back.  But of course when the pandemic hit, he couldn’t go back to the dorm so the plant was left there, untouched and in the dark for about four months.  You would think that when my roommate went back to get his things from our dorm in June, the plant would have been completely dried out and withered. I actually think we had both probably forgotten about it by then. But even though the plant was in pretty rough shape, there was definitely some green hiding under there.  So I pulled off the leaves and I gave it some water and put it on a windowsill and a few weeks later, it actually looked healthy again and has since grown quite a bit. And I really wouldn’t be surprised if it starts blooming again sometime soon.  This plant is a fighter I would say, and I know this time has been hard on everyone: some more than others. But I think that we all just kind of need to hold a little longer and, I don’t know, I’m feeling very hopeful."
            ></GalleryItem>
            <GalleryItem
              name={HarryPotter}
              audio="Audio/harry_potter_book.mp3"
              transcription="While choosing Harry Potter 7 as my artifact is sort of a basic response to this prompt. Reading Harry Potter and the Deathly Hallows was a really meaningful experience to me over quarantine and since the time the pandemic began. I actually didn't enter the Harry Potter game until a little bit later in my life. And by the time I entered high school, I was reading the fifth, and my mom just thought I was too old to be reading it, so I moved onto kind of more adult books at that time, and then came college, I still hadn't read the sixth or seventh book, which is crazy. And finally in quarantine, I really had a time to sit down and read. I didn't have anything else to do really, so it was my first time reading it. And although I wish I read Harry Potter and the Deathly Hallows when I was younger, I absolutely loved reading it at age 21. And during such a stagnant time in the world, I felt like a kid again in my childhood house rather than this like 21 year old transplant at home. I was totally engrossed with the book. And just super absorbed. Staying up until 3am reading not knowing where the time went - what a wonderful experience that I haven't had in a really long time. It just like brought me a lot of happiness and most importantly, it was just like this amazing escape. You know reading that book and turning the pages, not knowing the time, not knowing where I was in the story - just fully living in this other world and universe and escaping the one we are currently in. So, it just - I hadn't felt like that in a while, and I think it meant more to me than ever because in a time where there's so much turmoil in the world, it felt really refreshing to sort of exit it for a moment. And just to have that outlet that was fun and creative and magical. I think in the end because it was so special and so fun, and I loved the book so much, that it allowed me to appreciate this downtime that we have. And I'm privileged in saying that because I know how difficult this has been for so many people on a way more intense scale than it has been for me. But I think in sitting and reflecting and relaxing and having a moment to breathe, and just pick up Harry Potter 7 and tear through it and have fun - I felt very appreciative of that bonus time."
            ></GalleryItem>
            <GalleryItem
              name={Candles}
              audio="Audio/candles.mp3"
              transcription="Since quarantine started, I started to spend a lot more time in my room and in like my personal spaces, and a lot of that  was creating a space. I was then encouraged to create a space that felt really personal to me and like welcoming and homey because if I was going to be spending that much time at like my desk for instance, I wanted to make sure that I was comfortable there. And, I've always really liked candles. I find them to be extremely calming, and I think that the light they emit is really beautiful. Very different than a lot of the harsh lights that I'm looking at on my computer all day and those sort of things. And the kind of warmth they give off also brings me a lot of joy and happiness. So, once I was getting settled in my St. Louis apartment, I spent a couple trips going to Target with my roommates to pick out various items, and I never went in with the intention of buying a candle but somehow always walked out with one and started building up a small collection in my apartment. I think in terms of the word 'Grounded' these things really do provide me with a sense of groundedness, and when I feel like when I light them, I have no choice but to be calm because the candle itself represents this calmness and especially with all these crazy things going on in the world - their nature of being illuminating and providing light in the darkness and calm in the eye of the storm and that sort of thing. I just started to build a deeper and deeper connection. And now every time I walk in my room, every time I sit down to do work, I reach for my lighter and I light a candle and leave it burning for probably a little too long. And it's brought me a lot of joy in these very confusing times and has allowed me to create spaces I feel comfortable in, especially because I spend so much time in them."
            ></GalleryItem>
            <GalleryItem
              name={Pebble}
              audio="Audio/pebble.mp3"
              transcription="Alright, well, there's a lot that's happened over the past few months. There's always a lot going on, and it always seems like there's fifty awful things that are happening outside my home, and it's hard not to feel like I need to engage with them in some way. Yet, whenever I do or whenever many of the people around me do, it's overwhelming, and it can feel like there's nothing really good going on, anything really anchoring us. So, there's this rock that I have. It's smooth. It's about the size of a few quarters. It's a river pebble. It's grey. It's kind of marbled. You look at it and you sort of see another layer to it, like there's the surface and then the longer you look at it, the more you see– the more cracks and ridges you see kind of going away into the depths. And, it's really calming to hold. It feels like something hard and certain is there. And, it's just the right size for you to hold in your hand and fidget with. Whether I am sitting somewhere, like in a meeting, or just anything really. When anything stressful is going on it's become a habit to take this rock and just to hold it and it's relaxing. It really does wonders, I think. And, I'm glad that there's something, just one thing, right now that's certain like just this tiny rock that somehow makes all the difference for me to focus on and and, for a moment, stop thinking about the virus, stop thinking about all the violence that's occurring right now about all of these larger things that I feel like I have no control over, and just center myself on just a rock that I just picked up somewhere. I don't even remember where I have it from. And yet, it does it's job, really. I hope that others have also been able to find something like this for themselves and be able to take on a new meaning in a time when really all of us need something to help ground ourselves."
            ></GalleryItem>
            <GalleryItem
              name={PunchingBag}
              audio="Audio/punching_bag.mp3"
              transcription="So the object that I chose to talk about is the punching bag that hangs in my basement in my childhood home. And, I never really paid attention to it until I found myself quarantined in the basement and dealing with a lot of negative emotions after coming back from being abroad and feeling frustrated, uncertain, lonely, and wondering why all this was happening. So, one day, on a whim, I decided to try hitting the punching bag. I was really bad at it at first, but eventually, as I kept going, I was able to put more and more power into my punches and channel all of my negative sentiments into this physical outlet. Hitting the punching bag became a part of my weekly routine and it became a cathartic way for me to kind of reset for my week and remind myself that there are things that I can control— little things I can do, including, staying in touch and controlling my attitude and my emotions."
            ></GalleryItem>
            <GalleryItem
              name={SubwayPass}
              audio="Audio/transit_card.mp3"
              transcription="June 2020 was the first month in over four years that I haven't auto-renewed my unlimited ride New York City metro pass. Riding the subways was a big part of my experience living in New York City. I'd ride multiple times a day. I relied on the ease and convenience so much that I never even considered not paying for an unlimited pass. But in early May, my employer told us that we should expect to work remotely and won't be able to return to our office in downtown Manhattan until 2021. I finally had to cancel my Metro pass. And I have no idea when I'll start commuting and using the subway again for it to make sense for you to get another."
            ></GalleryItem>
            <GalleryItem
              name={Scrapbook}
              audio="Audio/scrapbook.mp3"
              transcription="This artifact is a journal full of collages that I made throughout quarantine and was a simultaneously very grounding factor for me, but also became this way to sort of track the time and encapsulate all of the feelings in this weird weightlessness that you felt, that I felt, during this time in a very tangible and tactile sort of way. I got this journal when I was abroad in Copenhagen and didn't really do much with it there it kind of free journal. I picked it up and kind of sat on shelf for the entire time that I was there. But also, while I was in Copenhagen, I did a lot of collecting of papers and ticket stubs and pamphlets. And those were my souvenirs from the trips that I was able to take. And also kind of they sat in a little pile, not really sure what I was going to do with them. But they felt important, I didn't want to throw them away. So then, when we had a huge reversal of life course, and I abruptly left Denmark and arrived at home, very, very sick. It I just felt like I was in limbo this entire time. I didn't know, I felt like I didn't have a grasp of what was happening around me. It felt like I was floating. But after recovering and sitting at the breakfast table for the first time confirmed that I was no longer sick, and our family was kind of experiencing what was becoming to be our Sunday routine of just sitting on the couch together and having a lazy morning. My dad gave me a section of the Wall Street Journal, which it was just funny coming from the Wall Street Journal and it's like this section is off duty section where they have things on food and style and whatever from their culture curators. And he was like, I found this for you, I thought you'd like it. And I was really touched that he did that and was just piecing through what was in there and realized that there was a lot of really cool visual elements to that and then dusted off this journal from my still unpacked bags from abroad. And also then began going through those papers that I had been set aside and put away and seeing how the elements from the newspaper at home fit with the elements that I had brought back. And the act of just putting them together helped, was a sense making activity for me. And the classes were never meant to be good. They were just meant to be an exercise. And the one that's pictured was special to me because it was from a off duty section that came around right around graduation time for the 2020 grads and they ended up posting a whole collection of commencement speeches from various people in this newspaper article. And reading through those was just inspiring and an act of hope, and I wanted to make sure that there was a way that I could put that on paper and remember it and it's something that I looked back to even now."
            ></GalleryItem>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
