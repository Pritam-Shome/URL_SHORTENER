import { generateNanoId } from "../utils/helper.js"
import urlSchema from "../models/short_url.model.js"
import { getCustomShortUrl, saveShortUrl, findExistingUrlForUser, findExistingUrl } from "../dao/short_url.js"

export const createShortUrlWithoutUser = async (url) => {
    // Check if URL already exists (for anonymous users, we still create new ones)
    // This is for anonymous users, so we don't check for duplicates
    const shortUrl = generateNanoId(7)
    if(!shortUrl) throw new Error("Short URL not generated")
    await saveShortUrl(shortUrl,url)
    return shortUrl
}

export const createShortUrlWithUser = async (url,userId,slug=null) => {
    // First, check if this URL already exists for this user
    const existingUrl = await findExistingUrlForUser(url, userId)
    if(existingUrl) {
        // Return the existing short URL instead of creating a new one
        return existingUrl.short_url
    }

    // If custom slug is provided, check if it already exists
    if(slug) {
        const exists = await getCustomShortUrl(slug)
        if(exists) throw new Error("This custom url already exists")
    }

    const shortUrl = slug || generateNanoId(7)
    await saveShortUrl(shortUrl,url,userId)
    return shortUrl
}