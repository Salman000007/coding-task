import { useState, useEffect } from "react";
import Tables from "./Table";


const Explore = () => {
    const [value, setValue] = useState([])
    const fetchData = async () => {
        const response = await fetch('http://devapi.hidoc.co:8080/hidoc-us/drug/getDrugList', {
          method: 'POST',
        });
        if (!response.ok) {
            console.error(`Error fetching data: ${response.statusText}`);
            return;
          }
        const apiData = await response.json();
        setValue(apiData.data.exploreMore);
      };
    
      useEffect(() => {
        fetchData();
      }, []);
      return (
        <div className="flex flex-col">
          <Tables />
          <h3 className="font-bold ml-[10%] mt-[2%]">Explore more on Hidoc Dr.</h3>
          {value.news && (
            <div className="flex mt-[1%] ml-[12%] ">
              <div className="w-[25%] ml-[2%]">
                <span>News</span>
                <h2>{value.news.title}</h2>
                <p>{value.news.description}</p>
                <p className="font-light text-xs">Posted on {value.news.publishedAt}</p>
              </div>
              <div className="w-[25%] ml-[2%] mt-[1.5%]">
                <p className="font-light text-xs mb-[3%]">
                  CRITICAL CARE {value.article.createdAt}
                </p>
                <h2>{value.article.articleTitle}</h2>
                <p>{value.article.metaDescription}</p>
              </div>
              <div className="flex flex-col w-[25%] ml-[4%] mt-[1.5%]">
                <div>
                  <p className="font-light text-xs mb-[3%]">CRITICAL CARE {value.survey[0].createdAt} </p>
                  <p className="font-bold">
                    {value.survey[0].metaDescription}
                  </p>
                </div>
                <div className="pt-6">
                  <p className="font-light text-xs mb-[3%]">CRITICAL CARE {value.article.createdAt} </p>
                  <p className="font-bold">
                   {value.article.metaDescription}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      );
      
}


export default Explore;