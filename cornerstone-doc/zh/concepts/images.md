---
description: Cornerstone Image objects have various properties (e.g. pixel spacing) which are used within the rendering pipeline.
---

# Images

[Image Loaders](image-loaders.md) 返回一个 **Image** 对象。

Image 对象可用的属性可以在 API 文档中的 [Image 对象定义](../api.md#image) 中查看：

::: tip
### Image

An Image Object in Cornerstone

Type: [Object]

#### Properties

-   `imageId` **[string]** The imageId associated with this image object
-   `minPixelValue` **[Number]** the minimum stored pixel value in the image
-   `maxPixelValue` **[Number]** the maximum stored pixel value in the image
-   `slope` **[Number]** the rescale slope to convert stored pixel values to modality pixel values or 1 if not specified
-   `intercept` **[Number]** the rescale intercept used to convert stored pixel values to modality values or 0 if not specified
-   `windowCenter` **[Number]** the default windowCenter to apply to the image
-   `windowWidth` **[Number]** the default windowWidth to apply to the image
-   `getPixelData` **[function]** a function that returns the underlying pixel data. An array of integers for grayscale and an array of RGBA for color
-   `getImageData` **[function]** a function that returns a canvas imageData object for the image. This is only needed for color images
-   `getCanvas` **[function]** a function that returns a canvas element with the image loaded into it. This is only needed for color images.
-   `getImage` **[function]** a function that returns a JavaScript Image object with the image data. This is optional and typically used for images encoded in standard web JPEG and PNG formats
-   `rows` **[Number]** number of rows in the image. This is the same as height but duplicated for convenience
-   `columns` **[Number]** number of columns in the image. This is the same as width but duplicated for convenience
-   `height` **[Number]** the height of the image. This is the same as rows but duplicated for convenience
-   `width` **[Number]** the width of the image. This is the same as columns but duplicated for convenience
-   `color` **[Boolean]** true if pixel data is RGB, false if grayscale
-   `lut` **[Object]** The Lookup Table
-   `rgba` **[Boolean]** Is the color pixel data stored in RGBA?
-   `columnPixelSpacing` **[Number]** horizontal distance between the middle of each pixel (or width of each pixel) in mm or undefined if not known
-   `rowPixelSpacing` **[Number]** vertical distance between the middle of each pixel (or height of each pixel) in mm or undefined if not known
-   `invert` **[Boolean]** true if the the image should initially be displayed be inverted, false if not. This is here mainly to support DICOM images with a photometric interpretation of MONOCHROME1
-   `sizeInBytes` **[Number]** the number of bytes used to store the pixels for this image.
-   `falseColor` **[Boolean]?** Whether or not the image has undergone false color mapping
-   `origPixelData` **[Array]?** Original pixel data for an image after it has undergone false color mapping
-   `stats` **ImageStats?** Statistics for the last redraw of the image
-   `cachedLut` **[Object]** Cached Lookup Table for this image.
-   `colormap` **([String] | Colormap)?** Depreacted. Use viewport.colormap instead. an optional colormap ID or colormap object (from colors/colormap.js). This will be applied during rendering to convert the image to pseudocolor
-   `labelmap` **[Boolean]?** whether or not to render this image as a label map (i.e. skip modality and VOI LUT pipelines and use only a color lookup table)
:::