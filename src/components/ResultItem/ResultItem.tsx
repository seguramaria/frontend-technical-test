type Props = {
  url: string;
  title: string;
  description: string;
};

export const ResultItem = ({ url, title, description }: Props) => {
  return (
    <li>
      <div>{url}</div>
      <div>{title}</div>
      <div>{description}</div>
    </li>
  );
};
