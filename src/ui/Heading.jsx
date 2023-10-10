const styles = {
  h1: "text-3xl font-semibold leading-snug font-poppins",
  h2: "text-2xl font-semibold leading-snug font-poppins",
  h3: "text-xl font-semibold leading-snug font-poppins",
};

function Heading({ as, children }) {
  const As = as;
  return <As className={styles[as]}>{children}</As>;
}

export default Heading;
