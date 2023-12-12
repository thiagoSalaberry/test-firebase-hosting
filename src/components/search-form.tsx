import React from "react";
import { useNavigate } from "react-router-dom";
import { useSearchResult } from "../hooks/useSearchResult";
import { Button } from "../ui/buttons";
import { Input } from "../ui/text-field";
export function SearchForm() {
    const navigate = useNavigate();
    function changeUrl(e) {
        e.preventDefault();
        console.log({pathname: location.pathname})
        const query = e.target.search.value;
        navigate(`/search/${query}`, {replace: true});
    };
    const resultsLength = useSearchResult().length;
    return (
        <div>
            <form onSubmit={changeUrl} id="search-form" className="prueba">
                {/* <input type="text" name="search" className={`form-input`} placeholder="Buscá tu producto acá"/> */}
                <Input type="text" name="search" placeholder="Buscá tu producto acá..."/>
                <Button>Buscar</Button>                
                {resultsLength != 0 ? <div>Cantidad de resultados: {resultsLength}</div> : ""}
            </form>
        </div>
            
    );
};