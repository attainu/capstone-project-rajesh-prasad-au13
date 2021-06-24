import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const CustomPagination = ({setPage,totalPages = 10}) => {
  const handleChange = (page) => {
      window.scroll(0,0)
      setPage(page)
  };
  return (
     <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Pagination
          onChange={(e) => handleChange(e.target.textContent)}
          count={totalPages}
          color="primary"
          hideNextButton
          hidePrevButton
        />
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       marginTop: theme.spacing(2),

//     },
//     marginBottom:"100px"
//   },
// }));

// export default function PaginationOutlined() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Pagination onchange={}/>
//     </div>
//   );
// }
