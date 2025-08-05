export function HeroVideoSection() {
  return (
    <div className="relative px-6 mt-10 pb-20">
      <div className="relative max-w-6xl mx-auto">
        <div className="relative shadow-2xl rounded-2xl overflow-hidden border border-border bg-background">
          <video
            className="w-full h-auto"
            loop
            playsInline
            controls
            preload="metadata"
          >
            <source src="https://raw.githubusercontent.com/abhishekloiwal/Rubben-MagicUI/main/public/Rubben-LandingPage-Demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
