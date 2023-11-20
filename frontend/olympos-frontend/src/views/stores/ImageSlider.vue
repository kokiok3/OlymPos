<template>
    <div class="image_slider">
        
        <button class="top_banner_arrow prev">
            <i class="fas fa-arrow-left"></i>
        </button>
        
        <div class="slider_container">
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
        </div>
        
        <button class="top_banner_arrow next">
            <i class="fas fa-arrow-right"></i>
        </button>

    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

let container: HTMLElement | null = null;
let slides: NodeListOf<HTMLElement> | null = null;
let btnLeft: HTMLButtonElement | null = null;
let btnRight: HTMLButtonElement | null = null;

let offset = 0;
let slideIncrement = 0;
let slideDecrement = 0;

let moveNext: ()=>void;
let movePrev: ()=>void;

let intervalNext: NodeJS.Timeout;

onMounted(()=>{
    container = document.querySelector('.slider_container');
    slides = document.querySelectorAll('.slide');
    btnLeft = document.querySelector('.top_banner_arrow.prev');
    btnRight = document.querySelector('.top_banner_arrow.next');
    
    if (container && slides && btnLeft && btnRight) {
        slideDecrement = slides.length - 1;

        moveNext = ()=>{
            if(slides){
                btnRight!.disabled = true;
                offset = slides[0].offsetWidth;
                container!.style.transition = 'ease-in-out 1000ms';
                container!.style.left = -offset + 'px';
                
                setTimeout(()=>{
                    if(slides){
                        container!.style.transition = 'none';
                        slides[slideIncrement].style.order = String(slides.length - 1);
                        container!.style.left = '';
                        
                        slideIncrement++;
                        slideDecrement = slideIncrement - 1;
                        if(slideIncrement === slides.length){
                            slideIncrement = 0;
                            slides.forEach(slide=>{
                                slide.style.order = 'initial';
                            });
                        }
                        btnRight!.disabled = false;
                    }
                }, 1000);
            }
        }
        movePrev = ()=>{
            if(slides){
                btnLeft!.disabled = true;
                offset = slides[0].offsetWidth;
                container!.style.transition = 'none';
                if(slideDecrement < 0){
                    slides.forEach(slide=>{
                        slide.style.order = 'initial';
                    });
                    slideDecrement = slides.length - 1;
                }
                slides[slideDecrement].style.order = '-1';
                container!.style.left = -offset + 'px';
                
                setTimeout(()=>{
                    container!.style.transition = 'ease-in-out 1000ms';
                    container!.style.left = '0';
                }, 1);
                
                setTimeout(()=>{
                    slideDecrement--;
                    slideIncrement = slideDecrement + 1;
                    btnLeft!.disabled = false;
                }, 1000)
            }
        }
        const pauseIntervalForMovePrev = ()=>{
            clearInterval(intervalNext);
            movePrev();
            setTimeout(() => {
                intervalNext = setInterval(moveNext, 3000);
            }, 0);
        }
        const pauseIntervalForMoveNext = ()=>{
            clearInterval(intervalNext);
            moveNext();
            setTimeout(() => {
                intervalNext = setInterval(moveNext, 3000);
            }, 0);
        }

        btnRight.addEventListener('click', pauseIntervalForMoveNext);
        btnLeft.addEventListener('click', pauseIntervalForMovePrev);

        intervalNext = setInterval(moveNext, 3000);
    }
});

onUnmounted(() => {
    if(btnRight && btnLeft){
        btnRight.removeEventListener('click', moveNext);
        btnLeft.removeEventListener('click', movePrev);
    }
    clearInterval(intervalNext)
});
</script>

<style scoped>
.image_slider {
    position: relative;
    height: 300px;
    overflow: hidden;
}
.top_banner_arrow {
    position: absolute;
    top: 50%;
    width: 55px;
    height: 115px;
    border-radius: 17px;
    border: none;
    background-color: #fff6;
    transform: translateY(-50%);
    z-index: 2;
}
.top_banner_arrow:hover {
    background-color: rgba(209, 209, 209, 0.479);
}
.top_banner_arrow.prev {
    left: 70px;
}
.top_banner_arrow.next {
    right: 70px;
}
.slider_container {
    position: absolute;
    top: 0;
    left: 0;
    width: 400%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}
.slide {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
}
.slider_container .slide:nth-child(1) {
    background-image: url('@/assets/images/top-banner-image1.jpg');
}
.slider_container .slide:nth-child(2) {
    background-image: url('@/assets/images/top-banner-image2.jpg');
}
.slider_container .slide:nth-child(3) {
    background-image: url('@/assets/images/top-banner-image3.jpg');
}
</style>