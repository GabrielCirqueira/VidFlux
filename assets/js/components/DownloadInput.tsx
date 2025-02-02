import { Input } from "@chakra-ui/react";

type DownlodInputProps = {
    url: string;
    setUrl: (url : string) => void;
}

export function DownloadInput(props : DownlodInputProps) {
    return (
        <Input type="text"
            placeholder="Cole o Link do Video  aqui"
            value={props.url}
            onChange={(e) => props.setUrl(e.target.value)}
            mb={3}
        />
    )
}