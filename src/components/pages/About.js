import React, { Component, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Title from "../common/Title";
import AboutImage from "../common/AboutImage";
import { FaClosedCaptioning, FaEye } from "react-icons/fa";

class About extends Component {
  state = {
    isOpen: false,
    about:
      "Meet Andrew, a full-stack software engineer who is passionate about his work. Andrew is a dedicated and talented developer who has honed his skills in building complex software solutions that are efficient, scalable, and user-friendly. Andrew's passion for software engineering is evident in the way he approaches each project with a strong sense of purpose and enthusiasm. He is always eager to learn new technologies and methodologies that can help him improve his skills and create better software. Andrew's expertise in full-stack development allows him to work on both front-end and back-end technologies with ease. He has a deep understanding of programming languages such as JavaScript, Java, as well as modern frameworks such as React, and Node.js. Andrew's attention to detail and his commitment to producing high-quality code sets him apart from other developers. He takes pride in delivering projects that not only meet but exceed his clients' expectations. Despite the challenges that come with software engineering, Andrew is always up for the task. He approaches every challenge with a positive attitude and a determination to find a solution that works. In summary, Andrew Mbugua is a passionate, talented, and dedicated full-stack software engineer with a proven track record of delivering exceptional software solutions. His commitment to his work and his drive to continuously improve his skills make him a valuable asset to any team.",
  };

  render() {
    const closeModal = () => {
      this.setState({ isOpen: false });
    };

    const openModal = () => {
      this.setState({ isOpen: true });
    };

    return (
      <div
        id="my_app/about"
        className="w-screen max-w-[1400px] h-screen bg-my-lightgray"
      >
        <div className="h-[50%] w-[100%] bg-my-black opacity-10"></div>
        <div className="h-fit w-fit md:flex block place-content-stretch md:mt-[-190px] mt-[-100px] justify-between md:ml-[160px] ml-[18%]">
          <AboutImage />
          <div className="md:w-[450px] md:ml-[60px] ml-[-60px] md:mt-0 mt-[100px] md:h-[400px]">
            <Title title={"About me"} />
            <h1 className="font-extrabold text-[22px] text-left md:ml-0 ml-8 md:pt-2 pt-4 md:mt-2 mt-[30px]">
              Why hire me ?
            </h1>
            <div className="h-[200px] bg-my-orange overflow-hidden relative font-medium text-md md:mt-[30px] mt-[-10px] md:p-2 p-4ring-2">
              <p className="mr-4">{this.state.about}</p>
              <button
                onClick={openModal}
                type="button"
                className="absolute bottom-0 right-0 hover:text-my-orange text-my-blue cursor-pointer"
              >
                <FaEye size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="h-[20%] w-full mt-[-30px] bg-my-lightgray"></div>

        <Transition appear show={this.state.isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-my-black bg-opacity-60" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-[500px] transform overflow-hidde rounded-2xl bg-my-lightgray p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-[25px] font-bold text-my-orange"
                    >
                      My about Section
                    </Dialog.Title>
                    <div className="absolute top-6 rounded-sm right-4 hover:ring-1 ring-my-orange w-fit h-fit">
                      <button
                        className="px-2 text-lg outline-none font-bold"
                        type="button"
                        onClick={closeModal}
                      >
                        X
                      </button>
                    </div>

                    <div className="mt-2">
                      <p className="text-sm font-medium text-my-black">
                        {this.state.about}
                      </p>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    );
  }
}

export default About;
