<template>

    <div class="bg-gray-100">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold mb-8 text-blue-600 hover:text-blue-800  text-center">My Portfolio</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="../assets/img/jumba-capt1.PNG"
            alt="" class="w-full h-48 object-cover">
      <div class="p-6">
        <h2 class="text-lg font-bold mb-4">Jumba Finder</h2>
        <p class="text-gray-700 leading-relaxed mb-4">Description of project 1</p>
        <p class="text-gray-600">Technologies used: Tailwind CSS, Nuxt.js</p>
        <a href="http://jumbafinder.com/" target="blank" class="block mt-4 text-blue-600 hover:text-blue-800  font-bold">View project</a>
      </div>
    </div>
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src="../assets/img/jumba-capt1.PNG" alt="" class="w-full h-48 object-cover">
      <div class="p-6">
        <h2 class="text-lg font-bold mb-4">Jumba Finder</h2>
        <p class="text-gray-700 leading-relaxed mb-4">Description of project 2</p>
        <p class="text-gray-600">Technologies used: Tailwind CSS, Nuxt.js</p>
        <a href="http://jumbafinder.com/" target="blank" class="block mt-4 text-blue-600 hover:text-blue-800  font-bold">View project</a>
      </div>
    </div>
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src="../assets/img/jumba-capt1.PNG" alt="" class="w-full h-48 object-cover">
      <div class="p-6">
        <h2 class="text-lg font-bold mb-4">Jumba Finder</h2>
        <p class="text-gray-700 leading-relaxed mb-4">Description of project 3</p>
        <p class="text-gray-600">Technologies used: Tailwind CSS, Nuxt.js</p>
        <a href="http://jumbafinder.com/" target="blank" class="block mt-4 text-blue-600 hover:text-blue-800  font-bold">View project</a>
      </div>
    </div>
    <!-- Add more projects as needed -->
  </div>
</div>
</div>
</template>


<script>
export default {
  head() {
    return {
      title: 'Joel Tassiga - Digital Marketer and Web Developer',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Joel Tassiga is a highly skilled digital marketer and web developer with over 5 years of experience in creating effective digital strategies and building responsive websites.'
        }
      ]
    }
  }
}
</script>