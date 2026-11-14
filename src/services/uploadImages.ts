import cloudinary from "@/lib/cloudinary";

interface UploadImageResult {
    publicId: string,
    ImageUrl: string
}

export async function uploadImages(images: File[]): Promise<UploadImageResult[]> {
    if (images.length < 1 || images.length > 4) {
        throw new Error(
            "Please Upload Between 1 and 4 Images."
        );
    }

    return Promise.all(
        images.map(async (file) => {
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);

            return new Promise<UploadImageResult>((resolve, reject) => {
                const stream = cloudinary.uploader.upload_stream(
                    {
                        folder: "fashion-house",
                        transformation: [
                            {
                                format: "webp"
                            },
                        ],
                    },
                    (error, result) => {
                        if (error || !result) {
                            reject(error);
                            return;
                        }

                        resolve({
                            ImageUrl: result.secure_url,
                            publicId: result.public_id,
                        });
                    }
                );

                stream.end(buffer);
            });
        })
    );
}