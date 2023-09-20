<template>
  <div class="contact-header h-[600px]"></div>
  <div class="custom-container">
    <div class="grid grid-cols-2 gap-8">
      <div class="bg-white px-12 py-16 mt-[-240px] contact-form relative overflow-hidden">
        <h3 class="text-3xl font-bold mb-3">Get in touch with us</h3>
        <p>We're here to help! Fill out the form below, and we'll respond promptly to assist you with any questions or inquiries you may have</p>
        <div class="mt-8 space-y-4">
          <div class="flex items-center gap-4 w-ful">
            <div class="w-full">
              <label for="">First Name</label>
              <input type="text" class="block border w-full mt-1 py-2 px-4 placeholder:text-sm border-gray-400" placeholder="Enter first name">
            </div>
            <div class="w-full">
              <label for="">Last Name</label>
              <input type="text" class="block border w-full mt-1 py-2 px-4 placeholder:text-sm border-gray-400" placeholder="Enter last name">
            </div>
          </div>
          <div>
            <label for="">Email</label>
            <input type="text" class="block border w-full mt-1 py-2 px-4 placeholder:text-sm border-gray-400" placeholder="Enter your email address">
          </div>
          <div>
            <label for="">Phone</label>
            <input type="text" class="block border w-full mt-1 py-2 px-4 placeholder:text-sm border-gray-400" placeholder="Enter your phone number">
          </div>
          <div>
            <label for="">Message</label>
            <textarea name="" id="" cols="30" rows="3" class="block border w-full mt-1 py-2 px-4 placeholder:text-sm border-gray-400" placeholder="Enter your email address"></textarea>
          </div>
          <div class="py-3">
            <div class="custom-drop-file">
            <input type="file" class="form-control">
            <div class="flex items-center pl-3">
              <span class="text-brand file-upload-icon block">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#0b193e" width="25px" height="25px" viewBox="0 0 32 32" version="1.1">
                  <title>clip</title>
                  <path d="M5.469 16.688l8.75-8.75c0.094-0.094 0.844-0.844 2.031-1.25 1.656-0.531 3.344-0.094 4.688 1.25 1.375 1.344 1.781 3 1.25 4.656-0.375 1.188-1.156 2-1.25 2.094l-9.406 9.406c-1.625 1.625-5.688 3.719-9.438 0-3.719-3.719-1.594-7.813 0-9.406l10.094-10.125c0.375-0.375 0.969-0.375 1.344 0s0.375 0.969 0 1.344l-10.063 10.125c-0.156 0.125-3.313 3.406 0 6.719 3.219 3.219 6.375 0.344 6.719 0l9.406-9.438s0.531-0.531 0.781-1.281c0.313-1 0.094-1.875-0.781-2.75-1.875-1.875-3.688-0.313-4.031 0l-8.75 8.719c-0.313 0.313-0.531 0.844 0 1.375s1.031 0.281 1.344 0l6.063-6.063c0.375-0.344 1-0.344 1.344 0 0.375 0.375 0.375 1 0 1.375l-6.063 6.031c-0.844 0.813-2.563 1.469-4.031 0-1.5-1.469-0.844-3.219 0-4.031z"/>
                  </svg>
              </span>
              <p class="text-brand">Attach file</p>
            </div>
          </div>
            <label for="">Upload sample File - if needed (Optional)</label>
          </div>
          <div><button class="py-3 text-white bg-brand w-full">Send Message</button></div>
        </div>
      </div>
      <div class="w-full mt-8">
        <AppWebiizard />
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-header{
  background:linear-gradient(0deg, rgb(11, 25, 62, 0.3), rgb(11, 25, 62, 0.2)), url('/images/contact-us/banner.webp');
  background-repeat: no-repeat;
  background-size:cover;
  color: rgb(11, 25, 62);
  background-position: bottom center;
}

.contact-form{
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
.custom-drop-file {
  position: relative;
  padding: 8px;
  background-color: rgba(164, 164, 164, 0.2);
  border: 1px solid #e4e4e4;
  cursor: pointer;
  width: 200px;
}

.custom-drop-file input {
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
}

.file-upload-icon {
  line-height: 0;
  font-size: 18px;
}
label{
  font-size: 15px;
}
.contact-form::before{
  position: absolute;
    content: '';
    height: 240px;
    width: 240px;
    border-radius: 50%;
    background-color: #01c1cf3d;
    top: -120px;
    left: -135px;
}
</style>