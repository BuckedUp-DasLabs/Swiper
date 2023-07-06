const createSwiper = (obj) => {
  const images = [];
  obj.imagesIds.forEach((id) => {
    images.push(document.querySelector(`#${id}`));
    document.getElementById(id).remove();
  });
  const container = document.getElementById(obj.containerID);
  container.innerHTML = "";
  container.classList.add("swiper");
  container.classList.add(obj.swiperName);
  obj.isBanner ? container.classList.add("banner") : "";

  const nextButton = document.getElementById(obj.nextButtonId);
  const prevButton = document.getElementById(obj.prevButtonId);
  nextButton?.classList.add(`swiper-next`);
  nextButton?.classList.add(`${obj.swiperName}-next`);
  prevButton?.classList.add(`swiper-prev`);
  prevButton?.classList.add(`${obj.swiperName}-prev`);
  if(obj.isBanner && nextButton && prevButton){
    container.appendChild(prevButton);
    container.appendChild(nextButton);
  }

  const pagination = document.getElementById(obj.pagination);
  if(pagination)
    pagination.innerHTML = "";
  pagination?.classList.add("swiper-pagination")
  pagination?.classList.add(`${obj.swiperName}-pagination`)
  
  const swiperWrapper = document.createElement("div");
  swiperWrapper.classList.add("swiper-wrapper");
  container.appendChild(swiperWrapper);
  
  images.forEach((img) => {
    img.classList = "";
    const swiperSlide = document.createElement("div");
    swiperSlide.classList.add("swiper-slide");
    swiperSlide.appendChild(img);
    swiperWrapper.appendChild(swiperSlide);
  });

  return new Swiper(`.swiper.${obj.swiperName}`, {
    slidesPerView: obj.slidesPerViewMobile,
    slidesPerGroup: obj.slidesPerGroupMobile,
    loop: obj.loop,
    rewind: obj.rewind,
    autoplay: obj.autoplay,
    speed: obj.speed,
    spaceBetween: obj.spaceBetween,
    centeredSlides: obj.centeredSlides,
    navigation: {
      nextEl: `.${obj.swiperName}-next`,
      prevEl: `.${obj.swiperName}-prev`,
    },
    pagination: {
      el: `.${obj.swiperName}-pagination`,
      type: 'bullets',
    },
    breakpoints: {
      768: {
        slidesPerView: obj.slidesPerView,
        slidesPerGroup: obj.slidesPerGroup
      }
    }
  });
};
