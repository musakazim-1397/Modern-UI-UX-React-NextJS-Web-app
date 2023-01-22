import Image from "next/image";
import React from "react";
import classes from "./BlogSection.module.css";
const BlogSection = () => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1 className={classes.mainHeading}>
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className={classes.body}>
        <div className={classes.mainBlog}>
          <div className={classes.mainBlogImageContainer}>
            <Image
              src={"/assets/blog01.png"}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={classes.blogMainContent}>
            <p className={classes.blogSmallText}>Sept 26, 2021</p>
            <p className={classes.blogTitle}>
              GPT-3 and Open AI is the future. Let us exlore how it is?
            </p>
            <p className={classes.blogSmallText}>Read Full Article</p>
          </div>
        </div>
        <div className={classes.otherBlogs}>
          <div className={classes.upperBlogs}>
            <div className={classes.smallLeftBlog}>
              <div className={classes.smallBlogImageContainer}>
              <Image src={"/assets/blog02.png"} layout='fill' objectFit="cover"  />
              </div>
              <div className={classes.smallBlogMainContent}>
                <p className={classes.smallBlogSmallText}>Sept 26, 2021</p>
                <p className={classes.smallBlogTitle}>
                  GPT-3 and Open AI is the future. Let us exlore how it is?
                </p>
                <p className={classes.smallBlogSmallText}>Read Full Article</p>
              </div>
            </div>
            <div className={classes.smallRightBlog}>
            <div className={classes.smallBlogImageContainer}>
              <Image src={"/assets/blog03.png"} layout='fill' objectFit="cover"  />
              </div>
              <div className={classes.smallBlogMainContent}>
                <p className={classes.smallBlogSmallText}>Sept 26, 2021</p>
                <p className={classes.smallBlogTitle}>
                  GPT-3 and Open AI is the future. Let us exlore how it is?
                </p>
                <p className={classes.smallBlogSmallText}>Read Full Article</p>
              </div>
            </div>
          </div>
          <div className={classes.lowerBlogs}>
            <div className={classes.smallLeftBlog}>
            <div className={classes.smallBlogImageContainer}>
              <Image src={"/assets/blog04.png"} layout='fill' objectFit="cover"  />
              </div>
              <div className={classes.smallBlogMainContent}>
                <p className={classes.smallBlogSmallText}>Sept 26, 2021</p>
                <p className={classes.smallBlogTitle}>
                  GPT-3 and Open AI is the future. Let us exlore how it is?
                </p>
                <p className={classes.smallBlogSmallText}>Read Full Article</p>
              </div>
            </div>
            <div className={classes.smallRightBlog}>
            <div className={classes.smallBlogImageContainer}>
              <Image src={"/assets/blog05.png"} layout='fill' objectFit="cover"  />
              </div>
              <div className={classes.smallBlogMainContent}>
                <p className={classes.smallBlogSmallText}>Sept 26, 2021</p>
                <p className={classes.smallBlogTitle}>
                  GPT-3 and Open AI is the future. Let us exlore how it is?
                </p>
                <p className={classes.smallBlogSmallText}>Read Full Article</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
