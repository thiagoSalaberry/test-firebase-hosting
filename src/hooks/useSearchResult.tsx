import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {atom, selector, useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import { queryState, resultsState } from "./atoms/query";
export function useSearchResult() {
    const params = useParams();
    const setQueryValue = useSetRecoilState(queryState);
    const query:string = params.query!; 

    const results = useRecoilValue(resultsState);
    useEffect(()=>{
        if (query) {
            setQueryValue(query);
        }
    }, [query]);
    return results;
};