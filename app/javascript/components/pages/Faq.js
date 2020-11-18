import React, { Component } from 'react'
import { Link } from 'react-router-dom'



class Faq extends Component {
  render() {
    return (
      <>
        <h3>Frequently Asked Questions</h3>
        <h5>How do I use your app?</h5>
        <p>1. Make an account
        <br />
        2. Create your profile when prompted on the Home page. <span>Remember, typing your full name acts as a signature, and upon submitting this form, you agree to release your personal medical information under HIPAA!</span> Not comfortable sharing some information publicly? Simply omit the field. You can always edit this information on My Profile too, if you ever change your mind!
        <br />
        3. Navigate to My Profile
        <br />
        4. Add your emergency contacts. You can always change these later, too!
        <br />
        5. Find your unique QR code on My Profile. Screenshot this, save it on your phone or leave a print in your wallet, and share it with your friends and family.
        <br />
        6. In your times of need, anybody with this QR code can access your profile and view your vital medical information. It's that easy!</p>


        <h5>Benefits from doing this?</h5>
        <p>
          At every doctor’s visit or trip to the ER, there are many questions that are asked: “What are your current daily medications? What’s your medical history? Any chronic medical conditions?” These are asked so that medical professionals can adapt their care to be specific to YOUR needs. This form answers them for you so you don’t have to worry about remembering every detail for every visit.
        </p>

        <h5>What inspired you to make this app?</h5>
        <p>
          Our glorious tech lead and client liaison, Nate Loranca, was an ER tech in his past life. When asked, "What critical issues did you see while working in the ER?", Nate said that most times, when a person is brought incapacitated or nonverbal to the ER, their loved ones often know <span>very little</span> vital information necessary for their care. Isn't that so shocking? So we decided to make an app that made it easy to get the best possible care so that you can take back control of your life and venture out into the unknown!
        </p>

        <h5>Is that clip art used in your app?</h5>
        <p>Nope! Everything was made with love and care by our design lead, Bach Diep! Go commission her on her <a href="https://www.linkedin.com/in/bachdiep/">LinkedIn</a> if you want some sweet art!</p>

        <h5>Is this app fully completed?</h5>
        <p>This web app was created in a 2-week time frame for the Life Science Rejects' capstone project. This current iteration as of November 18, 2020 is our MVP: the minimal viable product for our app to work. In future iterations, we would like to incorporate encryption so that your personal information is more secure. As such, please use the current iteration of this app at your own risk.</p>

        <h5>Whoa, ONLY a 2-week time frame? That's amazing! Can I hire you?</h5>
        <p>Yup, you read that right! With the powers of our skill, determination, and teamwork combined, the three of us at Life Science Rejects made LifeBand within 2 weeks! As for job inquiries, please visit our <Link to={"/devteam"}>Dev Team Page</Link> to contact us! We hope to hear from you soon!</p>

        <h5>Why are you called the Life Science Rejects?</h5>
        <p>Bach Diep, Diem Tran, and Nate Loranca are the members of the Life Science Rejects team. We are called so because we all studied or worked in life science-related fields prior to our web development careers. The Life Science Rejects attended LEARN Academy's 2020 Delta Cohort.</p>

        <h5>Do you have anybody you'd like to thank?</h5>
        <p>We would like to give HUGE thanks to Conroy Whitney, Jason Harrison, Aaron Spjut, and Sarah Proctor for their guidance, patience, and kindness during the development process of this app. You da bes'!</p>
      </>
    )
  }
}

export default Faq
