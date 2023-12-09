import React from "react";

const Profile = () => {
  return (
    <div id="Profile" className="w-full flex flex-col items-center pt-10 pb-20">
      <div id="profile-img" className=" ">
        <img
          className="w-32 h-32 rounded-full object-cover  ring-2 ring-teal-500"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxhdmF0YXJ8ZW58MHwwfHx8MTY5MTg0NzYxMHww&ixlib=rb-4.0.3&q=80&w=1080"
          alt="profile"
        />
      </div>
      <div id="profile-name" className=" font-bold text-xl my-5 c">
        John Ray
      </div>
      <div id="candidate-detail" className="flex flex-col text-center c">
        <div id="Section">Section - C </div>

        <div className="flex w-full ">
          <div id="Heigh"> Height - 150 | </div>
          <div id="Weigh"> Weight - 90</div>
        </div>
      </div>
      <div id="candidate-intro">
        <p className="font-md text-sm rounded-md m-2 ring-1 p-3 ring-teal-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cumque
          facere, mollitia, facilis iure a consequuntur quam recusandae vel
          voluptate expedita perspiciatis dolore, fuga aspernatur molestiae
          officiis! Molestiae tempore impedit dolorum cumque perspiciatis,
          repudiandae quod ab nemo praesentium dicta inventore modi, nihil
          laboriosam eaque autem. Cupiditate molestias aspernatur magnam
        </p>
      </div>
      <div id="carousel" className="w-full my-5 flex items-center">
        <div className="carousel rounded-box w-full mx-2">
          <div className="carousel-item w-1/2">
            <img
              src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
              className="w-full"
            />
          </div>
          <div className="carousel-item w-1/2">
            <img
              src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
              className="w-full"
            />
          </div>
          <div className="carousel-item w-1/2">
            <img
              src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
              className="w-full"
            />
          </div>
          <div className="carousel-item w-1/2">
            <img
              src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
              className="w-full"
            />
          </div>
          <div className="carousel-item w-1/2">
            <img
              src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
              className="w-full"
            />
          </div>
          <div className="carousel-item w-1/2">
            <img
              src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
              className="w-full"
            />
          </div>
          <div className="carousel-item w-1/2">
            <img
              src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
              className="w-full"
            />
          </div>
        </div>
      </div>
      <div className="c text-lg font-light animate-pulse">
        Drag slides to see more photos
      </div>

      <div id="buttons">
        <button
          data-modal-target="authentication-modal"
          data-modal-toggle="authentication-modal"
          className="px-3 py-2 text-gray-100 bg-teal-500 rounded-lg text-center font-bold hover:bg-teal-600 focus:ring-1 focus:ring-teal-700"
        >
          👑 Vote
        </button>
      </div>


    </div>
  );
};

export default Profile;
