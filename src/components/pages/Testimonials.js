import React from "react";
import { Tab } from "@headlessui/react";
import Cards from "../common/Cards";
import DivShadow from "../common/DivShadow";
import Title from "../common/Title";

export default function Testimonials() {
  const testimonials = [
    {
      title: "Best product!",
      text: "I can't say enough about the excellent work that Andrew has done on my website. He took a below-average website and transformed it into an appealing and informative website. It was an absolute pleasure to work with him. The designer part of my thoughts and suggestions has far surpassed my expectations.  Thank you, Andrew!",
    },
    {
      title: "Testimonial",
      text: "As a UX/UI designer I find it that I work closely with a dedicated team of developers to ensure that the compeling designs are brought to life and among the most cooperative developers I have had a chance to interact and work with andrew at Apprentice Cloud  with Andrew who is a self motivated and result driven individual who is committed to delivering the best results.I had a chance to work with him on several projects among which was a client project  an insurance marketing site and I must say the session was insightful as I learnt a lot from him .He is also a collegue and  friend ...I vouch for him at the position of the best and dedicated software developers that there can be...easy to work with,willingness to learn,collaborative,inssightful,results driven individual and a self starter are some of the many positive individual traits I can use to describe Andrew.....when you hire him be rest assured that you will have the work done...regards...",
    },
    {
      title: "Great Worker!",
      text: "I've known Andrew for almost a year and have found him to be hardworking, goal-oriented, tenacious, and an achiever. I believe that his academic credentials and technical skills will be extremely valuable to you as a client and to your company.",
    },
    {
      title: "It was a great experience!",
      text: "I have been working with Andrew since January 2022 in an apprenticeship program and his expertise and professionalism are evident throughout the development cycle, and am all the team members are very pleased with the final product that he produced. He has shown enormous skill and vast domain knowledge and his software development expertise is reliable and trustworthy. I would recommend Andrew to anyone looking for quality Software development services, delivered in a professional manner.",
    },
    // {
    //   title: "Testimonials",
    //   text: "There is absolutely no doubt in my mind that without Flowbite, I would not have been able to make the jump to Ueno, a digital agency I started in 2014. The work I got through Flowbite made it possible for me to have something to build on. We now have about 45 people on our team, a lot of whom we found and recruited through Flowbite",
    // },
    // {
    //   title: "Testimonials",
    //   text: "There is absolutely no doubt in my mind that without Flowbite, I would not have been able to make the jump to Ueno, a digital agency I started in 2014. The work I got through Flowbite made it possible for me to have something to build on. We now have about 45 people on our team, a lot of whom we found and recruited through Flowbite",
    // },
    // {
    //   title: "Testimonials",
    //   text: "There is absolutely no doubt in my mind that without Flowbite, I would not have been able to make the jump to Ueno, a digital agency I started in 2014. The work I got through Flowbite made it possible for me to have something to build on. We now have about 45 people on our team, a lot of whom we found and recruited through Flowbite",
    // },
  ];

  return (
    <div
      id="testimonials"
      className="block w-screen md:h-screen md:pt-0 pt-14 h-fit bg-my-lightgray md:pb-0 pb-14 max-w-[1400px]"
    >
      <div className="md:ml-[100px]">
        <Title title={"Testimonials"} />
      </div>

      <div className="md:flex md:pr-[80px] md:pl-[150px] w-fit md:h-[60%] md:mt-14 mt-14">
        <Tab.Group defaultIndex={3}>
          <div className="md:block flex md:w-[40%] w-[100%] pb-2 md:max-h-[400px] overflow-y-auto md:pl-[80px] pl-[10%]  max-h-[190px] mt-6 shadow-lg py-4">
            <Tab.List>
              <Tab>
                <Cards
                  testimonialCard={true}
                  image="https://media-exp1.licdn.com/dms/image/C4E03AQFiP9my7PDd6g/profile-displayphoto-shrink_200_200/0/1650316273970?e=1673481600&v=beta&t=2pjxuZQW7G_meH843hHRGbbTpQIzyf9hP7wmL-ML1Jo"
                  name={"Josephine Wairimu"}
                  title={"Software developer & a Technical mentor at Digifunzi"}
                />
              </Tab>
              <Tab>
                <Cards
                  testimonialCard={true}
                  image="https://media-exp1.licdn.com/dms/image/D4D03AQHxauh2UgkiRw/profile-displayphoto-shrink_100_100/0/1666429101465?e=1673481600&v=beta&t=57i9PRCvsA5FwtKRfahL15SauCi50s_YdYeHs5NgJT0"
                  name={"Alex Mwangi"}
                  title={"UX/UI Designer & lead...google developers club Mku"}
                />
              </Tab>
              <Tab>
                <Cards
                  testimonialCard={true}
                  image="https://media-exp1.licdn.com/dms/image/C4D03AQFr-SHfP6b2ng/profile-displayphoto-shrink_200_200/0/1650641966669?e=1673481600&v=beta&t=a8o5-ygPyA6Jfdvfgoria5VJlDgaaHtVl4l2_ZiPKnM"
                  name={"Timothy Munene"}
                  title={"Software developer"}
                />
              </Tab>
              <Tab>
                <Cards
                  testimonialCard={true}
                  image="https://media-exp1.licdn.com/dms/image/C4E03AQFiP9my7PDd6g/profile-displayphoto-shrink_200_200/0/1650316273970?e=1673481600&v=beta&t=2pjxuZQW7G_meH843hHRGbbTpQIzyf9hP7wmL-ML1Jo"
                  name={"Josephine Wairimu"}
                  title={"Software developer & a Technical mentor at Digifunzi"}
                />
              </Tab>
              {/* <Tab>
                <Cards
                  testimonialCard={true}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0K34qUFH8QdwAVBFqMfY9p93E5M4_-IUcaQ&usqp=CAU"
                  name={"Josephine Wairimu"}
                  title={"Technical Mentor"}
                />
              </Tab> */}
              {/* <Tab>
                <Cards
                  testimonialCard={true}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0K34qUFH8QdwAVBFqMfY9p93E5M4_-IUcaQ&usqp=CAU"
                  name={"Josephine Wairimu"}
                  title={"Technical Mentor"}
                />
              </Tab> */}
            </Tab.List>
          </div>
          <div className="md:w-[60%] place-content-center  rounded-lg h-[100%] md:pl-[60px] mt-[-0px] text-left">
            <Tab.Panels>
              {testimonials.map((t) => (
                <Tab.Panel key={t.title}>
                  <DivShadow text={t.text} title={t.title} />
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </div>
  );
}
