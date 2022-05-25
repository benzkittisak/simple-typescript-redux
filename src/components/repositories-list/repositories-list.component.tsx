import React, { useState } from "react";
import { useSelector } from "react-redux";

import { useActions } from "../../hooks/useActions";
import { RootState } from "../../redux";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  const {data , error , loading} = useSelector((state:RootState) => state.repositories);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // dispatch(actionCreators.searchRepositories(term));
    searchRepositories(term);
  };
  
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={term}
          type="text"
          onChange={(event) => setTerm(event.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
