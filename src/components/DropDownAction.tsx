'use client'

import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react"
import { EllipsisVertical, Pencil, Trash } from "lucide-react";
import { MouseEventHandler } from "react";

interface DropDownActionProps{
    onEdit: MouseEventHandler,
    onDelete: MouseEventHandler
}

export default function DropdownAction({onEdit, onDelete}: DropDownActionProps) {
    return(
        <Dropdown>
            <DropdownTrigger>
                <Button 
                variant="light"
                >
                    <EllipsisVertical/>
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
                <DropdownItem onClick={onEdit} startContent={<Pencil size={18} />} key="edit">editar</DropdownItem>
                <DropdownItem onClick={onDelete} startContent={<Trash size={18} />} key="delete" className="text-danger" color="danger">deletar</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}
