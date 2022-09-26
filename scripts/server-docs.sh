    #!/bin/bash

    (pnpm dlx http-server ./doc -p 8200 &)
    google-chrome --new-window --zygote http://0.0.0.0:8200/
