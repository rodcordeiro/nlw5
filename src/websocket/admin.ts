import { io } from "../http";
import { ConnectionsService } from '../services/ConnectionsServices';
import { MessagesServices } from '../services/MessagesServices';

io.on("connect",async (socket)=>{
    
    const connectionService = new ConnectionsService();
    const messagesService = new MessagesServices();

    const allConnectionsWhitoutAdmin = await connectionService.findAllWithoutAdmin();
    io.emit("admin_list_all_users",allConnectionsWhitoutAdmin)

    socket.on("admin_list_messages_by_user", async (params,callback)=>{
        const {user_id} = params;
        const allMessages = await messagesService.ListByUser(user_id)
        callback(allMessages);
    })
    socket.on("admin_send_message", async (params)=>{
        const { user_id, text } = params;

        await messagesService.create({ user_id, text, admin_id: socket.id })

        const { socket_id } = await connectionService.findByUserID(user_id)
        io.to(socket_id).emit("admin_send_to_client",{
            text,
            socket_id: socket.id,

        })

    })
    socket.on("admin_user_in_support", async (params)=>{
        const { user_id } = params;
        const connection = await connectionService.updateAdminId(user_id,socket.id);
        
        const allConnectionsWhitoutAdmin = await connectionService.findAllWithoutAdmin();
        io.emit("admin_list_all_users",allConnectionsWhitoutAdmin)
    
        
    })
})
