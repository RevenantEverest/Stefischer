export interface YouTubeEmbedProps {
    title: string,
    source: string
};

function YouTubeEmbed({ title, source }: YouTubeEmbedProps) {

    return(
        <div className="w-full h-full">
            <iframe
                title={title}
                className="w-full h-full"
                src={source} 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
            />
        </div>
    );
};

export default YouTubeEmbed;