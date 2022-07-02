import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import FunctionalComponent from "../functionalComponent"
import Styles from "./styles"
import DescriptionContainer from "../descriptionContainer"

const DynamicToolBar = ({
  filterOptions,
  setFilterOptions,
  name,
  sortOptions,
  setSortOptions,
}) => {
  const [option, setOption] = useState(null)
  const classes = Styles()
  return (
    <Grid container direction="column" alignItems="center">
      <Grid
        item
        container
        direction="column"
        classes={{ root: classes.toolBar }}
      >
        <FunctionalComponent
          option={option}
          setOption={setOption}
          sortOptions={sortOptions}
          filterOptions={filterOptions}
          setFilterOptions={setFilterOptions}
        />
        <DescriptionContainer categoryName={name} />
      </Grid>
    </Grid>
  )
}

export default DynamicToolBar
