import { getShortUrl, findExistingUrlForUser } from "../dao/short_url.js"
import { createShortUrlWithoutUser, createShortUrlWithUser } from "../services/short_url.service.js"
import wrapAsync from "../utils/tryCatchWrapper.js"

export const createShortUrl = wrapAsync(async (req,res)=>{
    const data = req.body
    let shortUrl
    let isExisting = false

    if(req.user){
        // Check if URL already exists for this user
        const existingUrl = await findExistingUrlForUser(data.url, req.user._id)
        if(existingUrl) {
            shortUrl = existingUrl.short_url
            isExisting = true
        } else {
            shortUrl = await createShortUrlWithUser(data.url,req.user._id,data.slug)
        }
    }else{
        shortUrl = await createShortUrlWithoutUser(data.url)
    }

    res.status(200).json({
        shortUrl: process.env.APP_URL + shortUrl,
        isExisting: isExisting,
        message: isExisting ? "URL already exists, returning existing short URL" : "New short URL created"
    })
})


export const redirectFromShortUrl = wrapAsync(async (req,res)=>{
    const {id} = req.params
    const url = await getShortUrl(id)
    if(!url) throw new Error("Short URL not found")
    res.redirect(url.full_url)
})

export const createCustomShortUrl = wrapAsync(async (req,res)=>{
    const {url,slug} = req.body
    const shortUrl = await createShortUrlWithoutUser(url,customUrl)
    res.status(200).json({shortUrl : process.env.APP_URL + shortUrl})
})