import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import PropTypes from "prop-types";

export function TopIcons({
  icons = [],
  badges = {},
  onIconClick,
  onCartClick
}) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {icons.map((icon, index) => (
        <IconButton
          key={`${icon.icon}-${index}`}
          size="small"
          onClick={() => onIconClick?.(icon)}
          sx={{ color: "text.secondary" }}
        >
          <Badge
            badgeContent={badges[icon.badge]}
            color="success"
            invisible={!icon.badge}
            overlap="circular"
          >
            <img
              src={`/img/icon/${icon.icon}.svg`}
              alt={icon.icon}
              width={20}
              height={20}
            />
          </Badge>
        </IconButton>
      ))}

      <IconButton size="small" onClick={onCartClick}>
        <Badge badgeContent={badges.cart} color="success" overlap="circular">
          <img src="/img/icon/bag.svg" alt="Cart" width={20} />
        </Badge>
      </IconButton>
    </Box>
  );
}

TopIcons.propTypes = {
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      badge: PropTypes.string,
      url: PropTypes.string
    })
  ),
  badges: PropTypes.object,
  onIconClick: PropTypes.func,
  onCartClick: PropTypes.func
};
