import RolePermission from "../app/models/RolePermission.js";
import { nextTick } from 'node:process';

export const getRolePermissions = async (req, res) => {
    try {
        const role = await RolePermission.findAll({
            attributes: ['role_id', 'permission_slug'],
        });
        res.send(role);
    } catch (err) {
        console.log(err);
    }
}

export const getRolePermissionsbyRoleId = async (req, res, next) => {
    try {
        // console.log(req.body.hasOwnProperty("P_SEARCH"));
        if(req.body.hasOwnProperty("P_SEARCH")){
            nextTick(() => {
                getDatabyId(req, res);
            });
        }
        else{
            return res.status(400).json({
                OUT_STAT: 'F',
                OUT_MESS: 'Not Found',
                OUT_DATA: []
            }); 
        }
        
        // for (var itemsFromBodyIndex in req.body){
        //     if (req.body.hasOwnProperty(itemsFromBodyIndex)) {
        //         console.log(req.body[itemsFromBodyIndex]);
        //         if(req.body[itemsFromBodyIndex] == null){
        //         // handle empty field
        //         return res.status(400).json({
        //             OUT_STAT: 'F',
        //             OUT_MESS: 'Not Found',
        //             OUT_DATA: []
        //         }); 
        //     }
        //     }
        // }
        
        
    } catch (err) {
        console.log(err);
    }
}

function validate(value) {
    var format = `^[!@#$%^&()_+\-=\[\]{};':"\\|,.<>\/?]$/`;
    const isSpecialCharPresent = format.split('').some(char =>
        value.includes(char))
    return isSpecialCharPresent;
}

async function getDatabyId(req, res){
    const P_SEARCH = req.body.P_SEARCH;
    if (P_SEARCH !== '' && !validate(P_SEARCH)) {
        const role = await RolePermission.findAll({
            attributes: ['role_id', 'permission_slug'],
            where: {
                role_id: P_SEARCH
            }
        });
        return res.json({
            OUT_STAT: 'T',
            OUT_MESS: 'Success',
            OUT_DATA: role
        });

    } else if (P_SEARCH == '') {
        const role = await RolePermission.findAll({
            attributes: ['role_id', 'permission_slug'],
        });

        return res.json({
            OUT_STAT: 'T',
            OUT_MESS: 'Success',
            OUT_DATA: role
        });
    } else if (validate(P_SEARCH)) {
        return res.status(400).json({
            OUT_STAT: 'F',
            OUT_MESS: 'Invalid input',
            OUT_DATA: ''
        });
    }
}