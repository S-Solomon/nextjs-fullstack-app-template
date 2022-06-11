export interface IFooter {
  sampleTextProp: string;
}

const Footer: React.FC<IFooter> = ({ sampleTextProp }) => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
      {sampleTextProp}
    </div>
  );
};

export default Footer;
