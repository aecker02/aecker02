bg_urls = ["images/slate/honed-slate-swatch.jpg", "images/slate/riven-slate-swatch.jpg"]

require "down"
require "fileutils"

def download_image(bg_url)
  tempfile = Down.download(bg_url)
  FileUtils.mv(tempfile.path, "./public/images/slate/#{tempfile.original_filename}")
end

bg_urls.each_with_index do |url, i| 
  download_image("https://www.istones.co.uk/#{url}") 
  p "#{i+1} - https://www.istones.co.uk/#{url} - completed"
end