# Script for adding swipers into instapage

## How to use

#### Paste this code into html/css footer:

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />
<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/BuckedUp-DasLabs/Swiper@latest/style.css" />
<script src="https://cdn.jsdelivr.net/gh/BuckedUp-DasLabs/Swiper@latest/script.js"></script>
```


#### Paste this into html/css footer as well, and change as necessary, for as many swipers you need:
```
<script>
  createSwiper({
  nextButtonId: "element-",
  prevButtonId: "element-",
  containerID: "element-",
  imagesIds: ["element-", "element-"],
  swiperName: "",
  isBanner: false,
  slidesPerView: 1,
  autoplay: { delay: 4000, disableOnInteraction: false },
  speed: 500,
  loop: true,
  spaceBetween: 0,
  centeredSlides: false,
  pagination: "element-",
});
</script>
```
