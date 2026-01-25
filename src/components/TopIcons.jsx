import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

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
          key={index}
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
        <img src="/img/icon/bag.svg" width={20} />
      </IconButton>
    </Box>
  );
}
