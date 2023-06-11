import { useEffect, useState } from 'react'

const CAT_PREFIX_URL = 'https://cataas.com'

// Custom hook
export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (fact) {
      const firstWord = fact.split(' ')[0]
      console.log(firstWord)

      const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

      fetch(CAT_ENDPOINT_IMAGE_URL)
        .then(res => res.json())
        .then(data => {
          const { url } = data
          setImageUrl(url)
        })
    }
  }, [fact])

  return { imageUrl: `${CAT_PREFIX_URL}${imageUrl}` }
}
