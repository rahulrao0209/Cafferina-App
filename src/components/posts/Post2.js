import React from "react";
import "./Posts.css";

export const Post2 = () => {
  const postDate = new Date();
  return (
    <div className="post">
      <div className="post-title">
        <p>Bonding Over A Coffee</p>
      </div>
      <div className="post-info">
        <div className="post-author">
          <img
            src="./assets/images/post-authors/author2.png"
            alt="author blake watson"
          />
        </div>
        <p className="post-author-name">Blake Watson</p>
        <p> | </p>
        <p>{postDate.toDateString()}</p>
      </div>
      <div className="post-content">
        <div className="post-content-photo">
          <img
            src="./assets/images/blog-section/blog-image-2.png"
            alt="Bonding Over a Coffee"
          />
        </div>
        <div className="post-content--content">
          <p>
            I cannot stress enough, how important network is in Denmark,
            especially for an international. Therefore, I gathered all my
            previous coffee posts into one when it comes to coffee meetings -
            why to do it, how to dot it, and how to act/what to talk about
            during a coffee meeting. Coffee meetings have became more popular
            within the last a couple of years. More and more Danes find
            themselves interacting with new people - that is how relations are
            made and info is 'moving'. If you're not doing it yourself, you're
            possibly missing out on a lot of 'golden info'.
          </p>
          <br />
          <p>
            Make a list of all your contacts so far - everything from you
            university, volunteer projects and internships counts. Think of who
            you met at where, which company and make an excel file with the
            company name, name of the person, their title, contact info, status
            which can be updated every time after you've been in contact. Reach
            out to them, one by one, introduce yourself and tell them what
            you're looking for. Perhaps they can forward your CV to their
            relevant network
          </p>
          <br />
          <p>
            The more you do it, the more comfortable you get and understand how
            to ‘read’ people - when to pause and when to talk. Depending on the
            other person and our conversation flow, I often share both
            professional and private info - I do want to get to know the people,
            not just what they do
          </p>
        </div>
      </div>
      <div className="post-author-details">
        <div className="post-author-details--photo">
          <img
            src="./assets/images/post-authors/author2.png"
            alt="author emma stone"
          />
        </div>
        <div className="post-author-details--details">
          <p>Written By</p>
          <p>Blake Watson</p>
          <p>Manager at Cafferina</p>
        </div>
      </div>
    </div>
  );
};
