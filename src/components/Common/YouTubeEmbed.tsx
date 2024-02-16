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
                allowFullScreen 
            />
        </div>
    );
};

export default YouTubeEmbed;