import React from 'react';
import { FaPlus } from 'react-icons/lib/fa';
import styled from 'styled-components';

import RecipesList from '../../container/RecipesList';
import Button from '../../components/Button';
import PATHS from '../../router/paths';

const RecipesCollection = () => (
  <React.Fragment>
    <AddButton href={PATHS.RECIPES_ADD} color="#fff" block>
      <FaPlus size={30} />
    </AddButton>

    <RecipesList />
  </React.Fragment>
);

export default RecipesCollection;

const AddButton = styled(Button)`
  position: fixed;
  right: 12px;
  bottom: 70px;
  padding: 0;
  width: 50px;
  height: 50px;
  justify-content: center;
  min-width: initial;
`;
