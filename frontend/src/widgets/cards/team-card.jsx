import PropTypes from "prop-types";
import { Card, Avatar, Typography } from "@material-tailwind/react";

export function TeamCard({ img, name, position }) {
  return (
    <Card
      color="transparent"
      shadow={false}
      className="text-center flex flex-col items-center justify-center hover:scale-110 transition-all duration-300  "
    >
      <Avatar
        src={img}
        alt={name}
        className="h-[20rem] w-[20rem] shadow-xl rounded-3xl  shadow-gray-500/25"
      />

      <Typography variant="h4" className="mt-6 mb-1 text-3xl text-navy-700  ">
        {name}
      </Typography>
      {position && (
        <Typography className="font-normal text-lg text-gray-700">
          {position}
        </Typography>
      )}
    </Card>
  );
}

TeamCard.defaultProps = {
  position: "",
  // socials: null,
};

TeamCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  // socials: PropTypes.node,
};

TeamCard.displayName = "../../widgets/cards/team-card.jsx";

export default TeamCard;
