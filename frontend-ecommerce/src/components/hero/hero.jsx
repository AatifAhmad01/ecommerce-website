import React from "react";
import './hero.css'

export default function Hero()
{

    return(
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="0"
            aria-label="Slide 1"
            class="active"
            ></button>
            <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            class=""
            ></button>
            <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            aria-current="true"
            ></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="3000">
                <div className="hero-container hero-item-first">

                </div>
            </div>

            <div class="carousel-item" data-bs-interval="3000">
                <div className="hero-container hero-item-second">

                </div>

            </div>

            <div class="carousel-item" data-bs-interval="3000">
                <div className="hero-container hero-item-second">

                </div>

            </div>

            <div class="carousel-item" data-bs-interval="3000">
                <div className="hero-container hero-item-second">

                </div>

            </div>
            
            <div class="carousel-item" data-bs-interval="3000">
                <div className="hero-container hero-item-third">

                </div>

            </div>
        </div>
        <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
        >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
        >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div> 

    )
}
