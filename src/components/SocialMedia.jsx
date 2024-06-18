import { useEffect } from 'react';
import { YouTubeEmbed } from 'react-social-media-embed';

const CustomElfSightEmbed = () => {
  useEffect(() => {
    // Create the script element
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.dataset.useServiceCore = true;
    script.defer = true;

    // Append the script to the body
    document.body.appendChild(script);

    // Cleanup: remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="elfsight-app-325f77b7-4d83-4256-ba86-79f352f251a0" data-elfsight-app-lazy></div>
  );
};

const SocialMedia = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-6 text-center">
        <div className="bg-terracotta text-white text-center py-2 mb-8 rounded-lg">
          <h2 className="text-3xl font-bold font-cocktail">Social</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-start">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-seaBlue">Instagram</h3>
            <div className="mt-4">
              <CustomElfSightEmbed />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-seaBlue">YouTube</h3>
            <div className="mt-4">
              <YouTubeEmbed
                url="https://www.youtube.com/watch?v=4FOghJzXuYg"
                width={328}
                height={328} // Default height for small screens
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
