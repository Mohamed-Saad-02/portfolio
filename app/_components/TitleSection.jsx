function TitleSection({ title = "h2", as }) {
  const Title = as || "h2";

  return <Title className="text-primary text-2xl font-medium">{title}</Title>;
}

export default TitleSection;
