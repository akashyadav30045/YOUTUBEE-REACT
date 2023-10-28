const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="fixed bottom-8 right-8 p-2  w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-900 transition duration-300"
      onClick={scrollToTop}
      title="Scroll to Top"
    >
      &#8593;
    </button>
  );
};

export default ScrollToTopButton;
