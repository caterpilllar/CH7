// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");


  eleventyConfig.addShortcode("post", function(postpic, logo, brand, group, likes, views){
    return`
    <div>
         <img class='rounded-lg' src="images/${postpic}.png">

         <div class='grid gap-0 grid-cols-3'>
            <div class='col-1 py-2'>
                <img class='h-8 float-left rounded-full bg-black' src="images/${logo}.png">
                <p class='h-10 ml-10 text-lg'> ${brand} </p>
            </div>

            <div class='col-1 mr-20 p-0 h-10 py-2'> 
                <p class='text-white bg-gray-400 text-lg w-5/6 rounded font-bold'> ${group} </p>
            </div>

            <div class='grid gap-0 grid-cols-2'> 
                <div class='col-1 py-2'>
                    <img class='h-6 px-1 float-left' src='images/heart.png'>
                    <p class='text-lg'>${likes}</p>
                </div>
                <div class='col-1 py-2'>
                    <img class='h-6 px-1 float-left' src='images/eye.png'>
                    <p class='text-lg'>${views}</p>
                </div>
            </div>
            

         </div> 
    </div>`
  });


};

