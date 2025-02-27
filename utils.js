// Format price with currency
export const formatPrice = (price) => {
    return `$${price.toLocaleString()}`;
  };
  
  // Convert date to readable format
  export const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  // Scroll to top function for navigation
  export const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  