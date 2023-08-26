import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";

export function PageTitle({ heading }) {
  return (
    <div className="mx-auto w-full px-4 text-center lg:w-6/12">
      <Typography
        variant="h2"
        className=" text-gray-900 sm:text-4xl text-center  antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3]  mb-3"
      >
        {heading}
      </Typography>
    </div>
  );
}

PageTitle.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

PageTitle.displayName = "/src/widgets/layout/page-title.jsx";

export default PageTitle;
