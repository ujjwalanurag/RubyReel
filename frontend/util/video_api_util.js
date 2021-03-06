export const fetchVideos = (data) => {
    return(
        $.ajax({
            method: "GET",
            url: "api/videos",
            data
        })
    );
};

export const fetchVideo = (videoId) => {
    return(
        $.ajax({
            method: "GET",
            url: `api/videos/${videoId}`
        })
    );
};

export const createVideo = (video) => {
    return (
        $.ajax({
            method: "POST",
            url: `api/videos`,
            data: video,
            contentType: false,
            processData: false
        })
    );
};

export const updateVideo = (video, tags) => {
    return (
        $.ajax({
            method: "PATCH",
            url: `api/videos/${video.id}`,
            data: { video, tags }
        })
    );
};

export const deleteVideo = (videoId) => {
    return (
        $.ajax({
            method: "DELETE",
            url: `api/videos/${videoId}`
        })
    );
};