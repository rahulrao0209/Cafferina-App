import React from "react";
import "./Posts.css";

export const Post1 = () => {
  const postDate = new Date();

  return (
    <div className="post">
      <div className="post-title">
        <p>Coffee - The Miracle Drink</p>
      </div>
      <div className="post-info">
        <div className="post-author">
          <img
            src="./assets/images/post-authors/author1.png"
            alt="author emma stone"
          />
        </div>
        <p className="post-author-name">Emma Stone</p>
        <p> | </p>
        <p>{postDate.toDateString()}</p>
      </div>
      <div className="post-content">
        <div className="post-content-photo">
          <img
            src="./assets/images/blog-section/blog-image-1.png"
            alt="Coffee - The Miracle Drink"
          />
        </div>
        <div className="post-content--content">
          <p>
            Nothing really beats the first sip of coffee in the morning —
            whether it’s a dark roast made from coarse grounds and a French
            press or something less strong and dark via your reliable Mr.
            Coffee. But just like everything in life, there’s always room for
            improvement. Whether it be the right coffeemaker or the right milk
            or milk frother, the ideal method for making the perfect cup of
            coffee is easier than you think. After all, in addition to tasting
            great and kick-starting your day, there are coffee health benefits
            that aren’t widely known.
          </p>
          <br />
          <p>
            Portland, Oregon, knows coffee, and Water Avenue has long been a
            model roaster in the caffeine-addicted city. The outfit reigns
            supreme in all facets, from flavor and variety to presentation and
            packaging. The beans — the most important part — are roasted so
            deftly that you can recreate the quintessential coffee shop
            experience at home with ease.
          </p>
          <br />
          <p>
            It’s no surprise a warm-weather town like Los Angeles would
            specialize in a lighter roast style of coffee. Cognoscenti turn out
            some of the best of the category, without sacrificing big flavor
            profiles. Fans of fruit and citrus-driven coffees will fall for this
            lauded roaster.
          </p>
        </div>
      </div>
      <div className="post-author-details">
        <div className="post-author-details--photo">
          <img
            src="./assets/images/post-authors/author1.png"
            alt="author emma stone"
          />
        </div>
        <div className="post-author-details--details">
          <p>Written By</p>
          <p>Emma Stone</p>
          <p>A coffee enthusiast and journalist</p>
        </div>
      </div>
    </div>
  );
};
